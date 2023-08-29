import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../store/auth-context';
import Info from './Info';
import Question from './Question';

function Form({ submit, settitle }) {
  let { fid } = useParams();
  const [showForm, setFormStatus] = useState(false);
  const [eventinfo, setEventinfo] = useState();
  const [formdata, setFormdata] = useState();
  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();

  const [width, setWidth] = useState(5);
  useEffect(() => {
    async function makereq() {
      try {
        const resp = await axios.get(`/api/form/getForms/${fid}`, {
          email: authCtx.user.email,
        });
        console.log(resp.data.form);

        if (resp.data.invalid == true) {
          submit(true, 'not allowed class');
          settitle('');
          return;
        }
        if (resp.data.form == false) {
          submit(true, 'not found');
          settitle('');
        }
        const formdata = resp.data.form;
        const eventdata = resp.data.event;
        if (formdata) {
          settitle(formdata.heading);
        }

        if (
          formdata.type == 'Registration' &&
          eventdata.status != 'Registrations Open'
        ) {
          submit(true, 'regclosed');
          return;
        }

        try {
          const resp2 = await axios.post(
            `/api/registration/register/checkreg/`,
            {
              email: authCtx.user.email,
              sheetid: eventdata.sheetid,
              formid: fid,
            },
            { headers: { Authorization: `${authCtx.token}` } }
          );

          const data = resp2.data;

          if (data.reg == true) {
            submit(true, 'already');
            return;
          }
        } catch (e) {
          console.log(e);
        }

        if (formdata && eventdata) {
          submit(false, 'found');
        }

        if (authCtx.user.email.startsWith('1112')) {
          submit(true, 'not allowed class');

          return;
        } else {
          setFormdata(formdata);
          setEventinfo(eventdata);
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (authCtx.isLoggedIn == false) {
      authCtx.settarget(`form/${fid}`);
      redirect('/signin');
    } else if (authCtx.isLoggedIn == true) {
      makereq();
    }
  }, [fid]);

  const viewData = () => setFormStatus(true);
  return (
    <React.Fragment>
      <div
        className={
          formdata &&
          'flex flex-col justify-between pt-7 pb-28 items-center h-96 lg:w-[70%] md:w-[100%] w-[100%] rounded'
        }
        style={{ background: 'rgba(4, 0, 0, 0.60)' }}
      >
        {!showForm && formdata && (
          <div className="w-[90%]">
            <div className="h-2 bg-white rounded-sm">
              <div
                className="h-2 bg-yellow-500 rounded-sm"
                style={{ width: `${width}%` }}
              ></div>
            </div>
            <div className="text-white flex justify-between mt-3">
              <p className="ml-3">Start</p>
              <p className="mr-3">End</p>
            </div>
          </div>
        )}
        {!showForm && formdata && (
          <div className="flex flex-col justify-center items-center space-y-8">
            <text className="text-yellow-500 font-semibold lg:text-5xl md:text-3xl sm:text-4xl">
              Start Registration?
            </text>

            <div className="flex justify-center">
              <button className="bg-none text-white mr-10 text-sm">NO</button>

              {formdata && (
                <button
                  className=" fade-anim bg-yellow-500 hover:bg-yellow-900 text-black py-2 px-4 rounded text-sm"
                  onClick={viewData}
                >
                  {formdata.type == 'Registration' ? 'YES' : 'YES'}
                </button>
              )}
            </div>
          </div>
        )}
        {showForm && formdata && (
          <Question
            width={width}
            setWidth={setWidth}
            fid={fid}
            submit={submit}
            title={eventinfo.title}
            fields={formdata.fields}
            price={eventinfo.price}
            type={formdata.type}
            onsubmit={onsubmit}
          />
        )}
      </div>
      {eventinfo && <Info event={eventinfo} inst={formdata.instruction} />}
    </React.Fragment>
  );
}

export default Form;
