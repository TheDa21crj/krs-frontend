import React, { useState, useContext, useEffect } from 'react';
import Text from './Type/Text';
import Radio from './Type/Radio';
import Multiple from './Type/Multiple';
import Email from './Type/Email';
import Number from './Type/Number';
import Dropdown from './Type/Dropdown';
import AuthContext from '../../store/auth-context';
import confetti from 'https://cdn.skypack.dev/canvas-confetti@1';
import axios from 'axios';
import { useRef } from 'react';

function Question({
  fields,
  title,
  type,
  price,
  fid,
  submit,
  width,
  setWidth,
}) {
  const quesref = useRef();
  const [currentdata, setCurrentdata] = useState({});
  const [currentfield, setCurrentfield] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [error, setError] = useState('');
  const authCtx = useContext(AuthContext);

  var currentFieldNumber = 1;
  const incrementFactor = 95 / fields.length;

  useEffect(() => {
    // const numberOfFields=fields.length;
    // console.log(fields.length)
    const initialdata = fields.map((e, i) => {
      let val = '';
      if (e.default != '') {
        val = e.default;
      }
      if (e.autofill != 'none') {
        val = authCtx.user[e.autofill];
      }

      return {
        name: e.name,
        type: e.type,
        value: val,
        required: e.required,
        default: e.default,
      };
    });
    if (initialdata) {
      setCurrentdata(initialdata);
    }

    setCurrentfield(initialdata[currentQuestion]);
  }, []);

  const onChange = (e) => {
    let value;
    if (e.target.type == 'checkbox') {
      console.log(currentfield.value);
      if (e.target.checked == true) {
        var mularr = currentfield.value.split(',');
        if (mularr[0] == '') value = e.target.value;
        if (mularr[0] != '') {
          mularr.push(e.target.value);
          value = mularr.join(',');
        }
      } else {
        var mularr = currentfield.value.split(',');
        mularr = mularr.filter(function (item) {
          return item !== e.target.value;
        });
        value = mularr.join(',');
      }
    } else {
      value = e.target.value;
    }
    setCurrentfield({ ...currentfield, value: value });
  };

  const onformsubmit = async () => {
    if (currentQuestion + 1 == fields.length) {
      currentdata[currentQuestion] = currentfield;
      setCurrentdata(currentdata);
    }
    if (currentfield.value == '' && currentfield.required) {
      setError('Please fill the above field');
      return;
    }
    const nm = currentdata.find((e) => e.name == 'Contact No');

    if (type == 'Registration' && price > 0) {
      const resp2 = await axios.post(
        `/api/registration/register/createOrder/`,
        { price: price },
        { headers: { Authorization: `${authCtx.token}` } }
      );
      const orderid = resp2.data.orderId;

      var options = {
        key: import.meta.env.VITE_RZPY_ID, // Enter the Key ID generated from the Dashboard
        amount: price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'KRS',
        description: `${title}`,
        image:
          'https://ik.imagekit.io/krs/krslogo_xvWTwoYCz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660033699873',
        order_id: `${orderid}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          try {
            submit(true, 'submit');
            const resp = await axios.post(
              `/api/registration/register/submition/${fid}`,
              {
                row: currentdata,
                sign: response.razorpay_signature,
                oid: orderid,
                pid: response.razorpay_payment_id,
              },
              { headers: { Authorization: `${authCtx.token}` } }
            );
            const data = resp.data;

            if (data.success == true) {
              submit(true, 'done');
              confetti({
                particleCount: 550,
                spread: 100,
              });
            }
          } catch (e) {
            console.log(e);
          }
        },
        prefill: {
          email: authCtx.user.email,
          contact: nm.value,
        },
        notes: {
          address: 'Campus 12 , KIIT University',
        },
        theme: {
          color: '#EAB308',
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        alert(
          'Payment failed \n ' +
            response.error.description +
            '\n reson :' +
            response.error.reason +
            '\n payment id : ' +
            response.error.metadata.payment_id
        );
      });
      rzp1.open();
    } else {
      try {
        submit(true, 'submit');
        const resp = await axios.post(
          `/api/registration/register/submition/${fid}`,
          { row: currentdata, sign: '' },
          { headers: { Authorization: `${authCtx.token}` } }
        );
        const data = resp.data;
        if (data.success == true) {
          submit(true, 'done');
          confetti({
            particleCount: 550,
            spread: 100,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  function next() {
    if (currentfield.value == '' && currentfield.required) {
      setError('Please fill the above field');
      return;
    }
    quesref.current.classList.remove('fade-anim');
    quesref.current.style.opacity = 0;

    setTimeout(() => {
      quesref.current.style.opacity = 1;
      quesref.current.classList.add('fade-anim');
    }, 100);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < fields.length) {
      currentdata[currentQuestion] = currentfield;
      setCurrentdata(currentdata);
      setCurrentQuestion(nextQuestion);
      setCurrentfield(currentdata[nextQuestion]);
    }
    setWidth(((currentQuestion + 2) / fields.length) * 100);
    console.log(width);
  }

  function back() {
    if (currentQuestion != 0) {
      quesref.current.classList.remove('fade-anim');
      quesref.current.style.opacity = 0;

      setTimeout(() => {
        quesref.current.style.opacity = 1;
        quesref.current.classList.add('fade-anim');
      }, 100);
    }

    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      if (currentQuestion + 1 == fields.length) {
        currentdata[currentQuestion] = currentfield;
        setCurrentdata(currentdata);
      }
      setCurrentQuestion(prevQuestion);
      setCurrentfield(currentdata[prevQuestion]);
      setError('');
    }
    setWidth(((currentQuestion - 1) / fields.length) * 100);
    console.log(width);
  }

  return (
    <div key={currentfield.name} ref={quesref} className="fade-anim w-[80%]">
      <div className="flex justify-start items-center">
        <div>
          <text className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            {/* <span className="text-yellow-500">{currentQuestion + 1} .</span>{" "} */}
            {currentfield.name}
          </text>
        </div>
      </div>
      <div
        className="w-[80%] lg:w-[90%] py-3 px-5"
        style={{
          border: 'none',

          borderBottom:
            currentfield.type == 'radio' ? 'none' : '2px solid white ',
          fontSize: '16px',
          // padding: "12px 20px 12px 40px",
        }}
      >
        {currentfield.type == 'text' && (
          <Text
            initial={currentfield}
            name={currentfield.name}
            pre={currentQuestion}
            change={onChange}
          />
        )}
        {currentfield.type == 'email' && (
          <Email
            initial={currentfield.value}
            name={currentfield.name}
            pre={currentQuestion}
            change={onChange}
          />
        )}
        {currentfield.type == 'checkbox' && (
          <Radio
            name={currentfield.name}
            change={onChange}
            values={fields[currentQuestion].value}
            initial={currentfield.value}
          />
        )}
        {currentfield.type == 'multiplecheckbox' && (
          <Multiple
            name={currentfield.name}
            change={onChange}
            values={fields[currentQuestion].value}
            initial={currentfield.value}
          />
        )}
        {currentfield.type == 'dropdown' && (
          <Dropdown
            name={currentfield.name}
            change={onChange}
            values={fields[currentQuestion].value}
            initial={currentfield.value}
          />
        )}

        {currentfield.type == 'number' && (
          <Number
            initial={currentfield.value}
            pre={currentQuestion}
            name={currentfield.name}
            change={onChange}
          />
        )}
      </div>
      {error != '' && (
        <div className="flex justify-center items-center text-red-700">
          {error}
        </div>
      )}
      <div className="flex justify-start items-center mt-8 ">
        <button
          className="focus:outline-none text-white bg-none font-medium rounded-lg text-base px-4 py-2 mb-2 mr-10"
          onClick={back}
        >
          BACK
        </button>

        {currentQuestion + 1 == fields.length ? (
          <div>
            <button
              className="focus:outline-none  text-black bg-yellow-500 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2"
              onClick={onformsubmit}
            >
              {type == 'Registration' && price > 0 ? 'Pay' : 'Submit'}
            </button>
            {/* <text className="text-5xl text-white">SUBMITTED SUCCESSFULLY!!</text> */}
          </div>
        ) : (
          <>
            <button
              className="focus:outline-none  text-black bg-yellow-500 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={next}
            >
              NEXT
            </button>
            <div className="flex">
              <p className="text-white text-xs mr-1">Press Enter</p>
              <div className="flex justify-center items-center">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.97947 0C9.80378 0 9.63528 0.0697947 9.51104 0.19403C9.38681 0.318265 9.31702 0.486764 9.31702 0.662459V3.31229C9.31702 3.48799 9.24722 3.65649 9.12299 3.78072C8.99875 3.90496 8.83025 3.97475 8.65456 3.97475H2.30158L3.16278 3.12018C3.28752 2.99544 3.3576 2.82625 3.3576 2.64983C3.3576 2.47342 3.28752 2.30423 3.16278 2.17949C3.03803 2.05475 2.86884 1.98467 2.69243 1.98467C2.51602 1.98467 2.34683 2.05475 2.22208 2.17949L0.234708 4.16686C0.174397 4.22987 0.127121 4.30416 0.0955918 4.38548C0.029334 4.54676 0.029334 4.72766 0.0955918 4.88894C0.127121 4.97026 0.174397 5.04455 0.234708 5.10756L2.22208 7.09493C2.28367 7.15702 2.35694 7.20631 2.43766 7.23994C2.51839 7.27357 2.60498 7.29089 2.69243 7.29089C2.77988 7.29089 2.86647 7.27357 2.9472 7.23994C3.02792 7.20631 3.10119 7.15702 3.16278 7.09493C3.22487 7.03335 3.27415 6.96008 3.30778 6.87935C3.34141 6.79863 3.35873 6.71204 3.35873 6.62459C3.35873 6.53713 3.34141 6.45055 3.30778 6.36982C3.27415 6.28909 3.22487 6.21582 3.16278 6.15424L2.30158 5.29967H8.65456C9.18164 5.29967 9.68714 5.09029 10.0598 4.71758C10.4325 4.34487 10.6419 3.83938 10.6419 3.31229V0.662459C10.6419 0.486764 10.5721 0.318265 10.4479 0.19403C10.3237 0.0697947 10.1552 0 9.97947 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Question;
