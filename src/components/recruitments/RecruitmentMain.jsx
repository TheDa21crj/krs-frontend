import React from "react";
import PP from "../../public/drone.jpg";
import FlipCard from "./FlipCard";
import dbg from "../../public/dronebackground.jpg";

const OandM = [
  { name: "Abhishek Raj Kashyap", roll: "2130004" },
  { name: "Aryan Misra", roll: "2130046" },
  { name: "Arundhati Lal", roll: "2130013" },
  { name: "Aritro Bhowmick", roll: "2127009" },
  { name: "Rajashree Choudhary", roll: "2176076" },
  { name: "Ujval Kumar", roll: "22052080" },
  { name: "Anabik Chatterjee", roll: "2206155" },
  { name: "Suvansh Choudhary", roll: "22053911" },
  { name: "Niladri Bhattacharya", roll: "2276124" },
  { name: "Jeni Kakrania", roll: "2205213" },
  { name: "Nischay Ginoria", roll: "22051354" },
];
const GD=[
    { name: "Kazi Rezaul Kabir Rafi", roll: "21053392" },
    { name: "Om Thakur", roll: "2205911" },
    { name: "Ishika Chakraborty", roll: "2130019" },
    { name: "Farhan Jaffer", roll: "2105714" },
    { name: "Suryansh Singh", roll: "22054137"},

]
const VE=[
    { name: "Nikhil Kumar", roll: "22052743" },
    { name: "Chaitanya Pratap Singh	", roll: "2229108" },
    { name: "Shitanshu Shubham", roll: "2130132" },
    { name: "Piyali Murmu", roll: "2106129" },
    
];
const PH=[
    { name: "Soumyadeep Midya", roll: "2130143" },
    { name: "Debalina Bandyopadhyay", roll: "2105027" },
    { name: "Navonil Ghosh", roll: "2105041" },
    
]
const CW=[
    { name: "Himanshu Raj", roll: "21051566" },
    { name: "Nomula Srimlika", roll: "21051911" },
    { name: "Opika Dash", roll: "2205224" },
    { name: "Om Thakur", roll: "2205911" },
    { name: "Divyak Pratap Singh", roll: "21052838" },

]
function RecruitmentMain() {
  return (
    <div
      className="bg-fixed bg-[center_top_0em] lg:bg-top md:bg-top bg-cover bg-black pb-1"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(https://ik.imagekit.io/krs/EVENTS/IMG_1249_6zy5PWR_g.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1663261296305)`,
      }}
    >
      <div className="rucglass">
        <div className="py-12 px-5 fade-anim">
          <h1 className="text-5xl flex items-center justify-center  px-3 xl:text-5xl font-bold pb-2 text-center md:text-left text-yellow-500">
            {"Welcome "}

            {"Aboard !"}
          </h1>

          <div className="px-3 m-3 lg:ml-10 text-center   flex text-base l justify-start items-center font-light pb-6 text-white">
            {
              "KIIT Robotics Society heartily welcomes you all. Your membership to the society is acknowledged with immediate effect. We believe your skills and experience will make an excellent addition to our society."
            }
          </div>
          <br />

          <div className=" m-3 lg:ml-10 text-center   flex text-4xl justify-center items-center font-semibold pb-6 text-yellow-500">
            {"Non-Tech Recruitments 2023"}
          </div>
          <br />
          <div class="overflow-hidden flex items-center justify-center">
            <table class=" w-[50%] lg:ml-14 text-base lg:text-3xl text-left text-white">
              <tbody>
                <h5 className="text-yellow-500 ml-[-10px] lg:ml-[-92px]">
                  Operation and marketing
                </h5>
                <br />
                {OandM.map((v) => (
                  <tr>
                    <th
                      scope="row"
                      class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                    >
                      {v.name}
                    </th>
                    <td class="py-4 px-4">{v.roll}</td>
                  </tr>
                ))}
                <br/>
                <h5 className="text-yellow-500 ml-[-10px] lg:ml-[-92px]">
                  Graphic Designing
                </h5>
                <br />
                {GD.map((v) => (
                  <tr>
                    <th
                      scope="row"
                      class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                    >
                      {v.name}
                    </th>
                    <td class="py-4 px-4">{v.roll}</td>
                  </tr>
                ))}
                <br/>
                <h5 className="text-yellow-500 ml-[-10px] lg:ml-[-92px]">
                  Photography
                </h5>
                <br/>
                {PH.map((v) => (
                  <tr>
                    <th
                      scope="row"
                      class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                    >
                      {v.name}
                    </th>
                    <td class="py-4 px-4">{v.roll}</td>
                  </tr>
                ))}
                <br/>
                <h5 className="text-yellow-500 ml-[-10px] lg:ml-[-92px]">
                  Video Editing
                </h5>
                <br/>
                {VE.map((v) => (
                  <tr>
                    <th
                      scope="row"
                      class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                    >
                      {v.name}
                    </th>
                    <td class="py-4 px-4">{v.roll}</td>
                  </tr>
                ))}
                <br/>
                <h5 className="text-yellow-500 ml-[-10px] lg:ml-[-92px]">
                  Content Writing
                </h5>
                <br/>
                {CW.map((v) => (
                  <tr>
                    <th
                      scope="row"
                      class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                    >
                      {v.name}
                    </th>
                    <td class="py-4 px-4">{v.roll}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         <br/>
         <br/>
         <br/>
          <div className=" m-3 lg:ml-10 text-center   flex text-4xl justify-center items-center font-semibold pb-6 text-yellow-500">
            {"Technical Recruitments 2023"}
          </div>
          <br />

          <div class="overflow-x-hidden flex items-center justify-center">
            <table class=" w-[50%] lg:ml-14 text-base lg:text-3xl text-left text-white">
              <tbody>
                <h5 className="text-yellow-500 ml-[-10px] lg:ml-[-92px]">
                Embedded IoT & Robotics
                </h5>
                <br />
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Madhura
                  </th>
                  <td class="py-4 px-4">2130113</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Rudrali mahapatra
                  </th>
                  <td class="py-4 px-4">2130065</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Sohini Joarder
                  </th>
                  <td class="py-4 px-4">20051108</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Diganta parya
                  </th>
                  <td class="py-4 px-4">2104021</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Arko
                  </th>
                  <td class="py-4 px-4">2130011</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Soumyakanti Datta
                  </th>
                  <td class="py-4 px-4">21051262</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Dipshirsha Datta
                  </th>
                  <td class="py-4 px-4">2104126</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Soumyadip Adhikari
                  </th>
                  <td class="py-4 px-4">2107021</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Ashutosh
                  </th>
                  <td class="py-4 px-4">2004113</td>
                </tr>
                <br />
                <h5 className="text-yellow-500 ml-[-10px] lg:ml-[-92px]">
                  Web Development
                </h5>
                <br />

                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Gourav Chaki
                  </th>
                  <td class="py-4 px-4">2106029</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Antara Dubey
                  </th>
                  <td class="py-4 px-4">2105012</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Swarnali Mukhopadhyay
                  </th>
                  <td class="py-4 px-4">21051522</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Saurav Kumar
                  </th>
                  <td class="py-4 px-4">2130171</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Muskan Bajaj
                  </th>
                  <td class="py-4 px-4">21051228</td>
                </tr>
                <br />
                <h5 className="text-yellow-500 ml-[-10px] lg:ml-[-92px]">
                  Machine Learning
                </h5>
                <br />

                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Yash Ijarwal
                  </th>
                  <td class="py-4 px-4">2130094</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Vasu Agrawal
                  </th>
                  <td class="py-4 px-4">21053224</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Neha Bajpayee
                  </th>
                  <td class="py-4 px-4">2105807</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Pushkar Niroula
                  </th>
                  <td class="py-4 px-4">21053438</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Yatharth Jain
                  </th>
                  <td class="py-4 px-4">21051918</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Soham Gupta
                  </th>
                  <td class="py-4 px-4">20051039</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Kaustav Sharma
                  </th>
                  <td class="py-4 px-4">2005731</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    Rashid Mazhar
                  </th>
                  <td class="py-4 px-4">21052780</td>
                </tr>
                <br />
              </tbody>
            </table>
          </div>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}

export default RecruitmentMain;
