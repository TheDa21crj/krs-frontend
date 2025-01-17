import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

function AdminSidebar({ level }) {
  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();
  const logoutme = () => {
    redirect("/");
    authCtx.logout();
  };
  const allowed = [
    "admin",
    "member",
    "assistant coordinator",
    "coordinator",
    "oc",
  ];

  let activeStyle = {
    background: "rgb(57 58 60)",
    borderRadius:"5px"
    
  };
  
  return (

    <div className="button relative flex min-h-screen ">
      <div className="w-16 pt-4 lg:w-52 flex max-h-[92vh] flex-col text-white space-y-4 sticky top-16 ml-8">
        {level == "admin" && (
          <NavLink
            className="pl-6 hover:bg-[#393A3C] rounded-[5px] "
            to="/admin/adminmembers"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              &nbsp;
              <div className="py-2 pl-3 text-center hidden lg:block">
                Members
              </div>
            </div>
          </NavLink>
        )}

        {level == "admin" && (
          <NavLink
            className="pl-6 hover:bg-[#393A3C] rounded-[5px]"
            to="/admin/adminevents"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[20px] w-[16px]"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                >
                  <path d="M2 2H7V10L4.5 8.5L2 10M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0Z" />
                </svg>
              </div>{" "}
              &nbsp;
              <div className=" pl-3 py-2 text-center hidden lg:block">
                Events
              </div>
            </div>
          </NavLink>
        )}

        {level == "admin" && (
          <NavLink
            className="pl-6 hover:bg-[#393A3C] rounded-[5px]"
            to="/admin/adminachievements"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[20px] w-[20px]"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 0H2C1 0 0 0.9 0 2V5.01C0 5.73 0.43 6.35 1 6.7V18C1 19.1 2.1 20 3 20H17C17.9 20 19 19.1 19 18V6.7C19.57 6.35 20 5.73 20 5.01V2C20 0.9 19 0 18 0ZM12 12H8C7.45 12 7 11.55 7 11C7 10.45 7.45 10 8 10H12C12.55 10 13 10.45 13 11C13 11.55 12.55 12 12 12ZM18 5H2V2H18V5Z"
                  />
                </svg>
              </div>{" "}
              &nbsp;
              <div className=" pl-3 py-2 text-center hidden lg:block">
                Achievements
              </div>
            </div>
          </NavLink>
        )}

        {level == "admin" && (
          <NavLink
            className="pl-6 hover:bg-[#393A3C] rounded-[5px]"
            to="/admin/forms"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              &nbsp;
              <div className=" pl-3 py-2 text-center hidden lg:block">
                Forms
              </div>
            </div>
          </NavLink>
        )}

        {level == "user" && (
          <NavLink className="pl-6 hover:bg-[#393A3C] rounded-[5px]" to="/admin/userprofile">
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 17 20"
                  fill="currentColor"
                >
                  <path d="M13.9288 3.43535L11.5567 0.261521C10.909 0.000160904 11.1509 -0.00120266 10.909 0.000160915L5.45451 0.000159126C4.97229 0.000159126 5.93672 0.000159126 5.45451 0.000159126C5.00998 0.444674 5.11353 0.341132 5.45451 0.000159126H1.81817C1.33595 0.000159126 0.873507 0.191716 0.532529 0.532688C0.191551 0.873661 0 1.33612 0 1.81833V18.1818C0 18.664 0.191551 19.1265 0.532529 19.4675C0.873507 19.8084 1.33595 20 1.81817 20H14.5453C15.0276 20 15.49 19.8084 15.831 19.4675C16.172 19.1265 16.3635 18.664 16.3635 18.1818V16.3637H14.897C15.3792 16.3637 16.0225 16.7046 16.3635 16.3637C16.3635 15.8162 16.3635 15.0277 16.3635 14.5455L13.9288 4.80694C13.9301 4.56508 14.0976 3.60853 13.9288 3.43535ZM10.909 15.4546H5.45451C5.2134 15.4546 4.98218 15.3588 4.81169 15.1883C4.6412 15.0178 4.54542 14.7866 4.54542 14.5455C4.54542 14.3044 4.6412 14.0732 4.81169 13.9027C4.98218 13.7322 5.2134 13.6364 5.45451 13.6364H10.909C11.1501 13.6364 11.3813 13.7322 11.5518 13.9027C11.7223 14.0732 11.8181 14.3044 11.8181 14.5455C11.8181 14.7866 11.7223 15.0178 11.5518 15.1883C11.3813 15.3588 11.1501 15.4546 10.909 15.4546ZM10.909 11.8182H5.45451C5.2134 11.8182 4.98218 11.7225 4.81169 11.552C4.6412 11.3815 4.54542 11.1503 4.54542 10.9092C4.54542 10.6681 4.6412 10.4368 4.81169 10.2663C4.98218 10.0959 5.2134 10.0001 5.45451 10.0001H10.909C11.1501 10.0001 11.3813 10.0959 11.5518 10.2663C11.7223 10.4368 11.8181 10.6681 11.8181 10.9092C11.8181 11.1503 11.7223 11.3815 11.5518 11.552C11.3813 11.7225 11.1501 11.8182 10.909 11.8182ZM14.7166 13.9027L16.3635 14.5455V5.45466C16.3649 5.2128 16.271 4.98012 16.1022 4.80694L11.5567 0.261521C11.3835 0.0926834 11.1509 -0.00120266 10.909 0.000160915L5.45451 0.000159126L5.86239 2.57244L9.95183 4.80694L12.8032 3.773L14.7166 13.9027Z" />
                </svg>
              </div>{" "}
              &nbsp;
              <div className=" pl-3 py-2 text-center  hidden lg:block">
                Dashboard
              </div>
            </div>
          </NavLink>
        )}

        {allowed.includes(level) && (
          <NavLink
            className="pl-6 hover:bg-[#393A3C] rounded-[5px]"
            to="/admin/memberprofile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.99998 19C14.9705 19 19 14.9705 19 9.99998C19 5.02949 14.9705 0.999998 9.99998 0.999998C5.02949 0.999998 0.999998 5.02949 0.999998 9.99998C0.999998 14.9705 5.02949 19 9.99998 19ZM9.99998 20C15.523 20 20 15.523 20 9.99998C20 4.47699 15.523 0 9.99998 0C4.47699 0 0 4.47699 0 9.99998C0 15.523 4.47699 20 9.99998 20Z"
                    fill="#FFB742"
                  ></path>
                  <path fill-rule="evenodd"
                    clip-rule="evenodd" d="M4 15.8149C4 15.2984 4.386 14.8619 4.9 14.8049C8.75749 14.3779 11.26 14.4164 15.109 14.8144C15.3012 14.8346 15.4834 14.9103 15.6332 15.0323C15.7831 15.1543 15.8942 15.3173 15.953 15.5014C16.0117 15.6856 16.0156 15.8828 15.9641 16.0691C15.9126 16.2553 15.808 16.4226 15.663 16.5504C11.1205 20.5099 8.52449 20.4554 4.32 16.5544C4.115 16.3644 4 16.0939 4 15.8149Z" fill="#FFB742"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0575 15.3116C11.239 14.9166 8.77249 14.8796 4.9545 15.3021C4.82882 15.3168 4.71296 15.3773 4.6291 15.472C4.54524 15.5668 4.49927 15.6891 4.5 15.8156C4.5 15.9586 4.5595 16.0941 4.66 16.1881C6.744 18.1211 8.32299 18.9946 9.86649 19.0001C11.4155 19.0056 13.0795 18.1391 15.3345 16.1741C15.4061 16.1104 15.4577 16.0272 15.4829 15.9346C15.5082 15.8421 15.506 15.7442 15.4766 15.6529C15.4473 15.5616 15.3921 15.4808 15.3177 15.4203C15.2432 15.3598 15.1529 15.3217 15.0575 15.3116ZM4.845 14.3081C8.74299 13.8766 11.282 13.9156 15.161 14.3171C15.4501 14.3473 15.7242 14.4611 15.9497 14.6447C16.1751 14.8282 16.3422 15.0735 16.4303 15.3506C16.5185 15.6276 16.524 15.9243 16.4462 16.2044C16.3683 16.4845 16.2105 16.7358 15.992 16.9276C13.7045 18.9216 11.7995 20.0076 9.86349 20.0001C7.92199 19.9931 6.101 18.8886 3.9805 16.9211C3.82868 16.7797 3.70765 16.6085 3.62497 16.4182C3.5423 16.2279 3.49976 16.0226 3.5 15.8151C3.49927 15.4423 3.6361 15.0824 3.88428 14.8042C4.13246 14.5261 4.47454 14.3497 4.845 14.3081Z" fill="#FFB742"/>
                  <path fill-rule="none" clip-rule="evenodd" d="M9.99999 11C10.7956 11 11.5587 10.6839 12.1213 10.1213C12.6839 9.5587 13 8.79564 13 7.99999C13 7.20434 12.6839 6.44128 12.1213 5.87868C11.5587 5.31607 10.7956 5 9.99999 5C9.20434 5 8.44128 5.31607 7.87868 5.87868C7.31607 6.44128 7 7.20434 7 7.99999C7 8.79564 7.31607 9.5587 7.87868 10.1213C8.44128 10.6839 9.20434 11 9.99999 11ZM9.99999 12C11.0609 12 12.0783 11.5786 12.8284 10.8284C13.5786 10.0783 14 9.06086 14 7.99999C14 6.93913 13.5786 5.92171 12.8284 5.17157C12.0783 4.42143 11.0609 4 9.99999 4C8.93913 4 7.92171 4.42143 7.17157 5.17157C6.42143 5.92171 6 6.93913 6 7.99999C6 9.06086 6.42143 10.0783 7.17157 10.8284C7.92171 11.5786 8.93913 12 9.99999 12Z" fill="#FFB742"/>

                  {/* <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  /> */}
                </svg>
              </div>{" "}
              &nbsp;
              <div className=" pl-3 py-2 text-center hidden lg:block">
                Member Profile
              </div>
            </div>
          </NavLink>
        )}

        {allowed.includes(level) && (
          <NavLink
            className="pl-6 hover:bg-[#393A3C] rounded-[5px]"
            to="/admin/admininventory"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[20px] w-[20px]"
                
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    fill-rule="none"
                    fill="#FFB742"
                    d="M18.3333 0H1.66667C1.22464 0 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 0 1.22464 0 1.66667L0 18.3333C0 18.7754 0.175595 19.1993 0.488155 19.5118C0.800716 19.8244 1.22464 20 1.66667 20H18.3333C18.7754 20 19.1993 19.8244 19.5118 19.5118C19.8244 19.1993 20 18.7754 20 18.3333V1.66667C20 1.22464 19.8244 0.800716 19.5118 0.488155C19.1993 0.175595 18.7754 0 18.3333 0ZM5 13.3333C4.83518 13.3333 4.67407 13.2845 4.53702 13.1929C4.39998 13.1013 4.29317 12.9712 4.2301 12.8189C4.16703 12.6666 4.15052 12.4991 4.18268 12.3374C4.21483 12.1758 4.2942 12.0273 4.41074 11.9107C4.52729 11.7942 4.67577 11.7148 4.83742 11.6827C4.99908 11.6505 5.16663 11.667 5.3189 11.7301C5.47117 11.7932 5.60132 11.9 5.69289 12.037C5.78446 12.1741 5.83333 12.3352 5.83333 12.5C5.83311 12.7209 5.74524 12.9328 5.58901 13.089C5.43278 13.2452 5.22095 13.3331 5 13.3333ZM18.3333 5H16.5133C16.3168 4.44399 15.9299 3.97537 15.4213 3.67697C14.9126 3.37858 14.3148 3.26961 13.7336 3.36934C13.1523 3.46906 12.625 3.77106 12.2449 4.22195C11.8648 4.67284 11.6563 5.24359 11.6563 5.83333C11.6563 6.42307 11.8648 6.99383 12.2449 7.44472C12.625 7.89561 13.1523 8.1976 13.7336 8.29733C14.3148 8.39706 14.9126 8.28809 15.4213 7.98969C15.9299 7.69129 16.3168 7.22268 16.5133 6.66667H18.3333V10H15V11.6667H18.3333V13.3333H16.6667V15H18.3333V18.3333H11.6667V17.3467C12.2227 17.1501 12.6913 16.7633 12.9897 16.2546C13.2881 15.7459 13.3971 15.1481 13.2973 14.5669C13.1976 13.9856 12.8956 13.4584 12.4447 13.0782C11.9938 12.6981 11.4231 12.4896 10.8333 12.4896C10.2436 12.4896 9.67284 12.6981 9.22195 13.0782C8.77106 13.4584 8.46906 13.9856 8.36934 14.5669C8.26961 15.1481 8.37858 15.7459 8.67697 16.2546C8.97537 16.7633 9.44399 17.1501 10 17.3467V18.3333H5.83333V14.8467C6.38934 14.6501 6.85796 14.2633 7.15636 13.7546C7.45476 13.2459 7.56372 12.6481 7.464 12.0669C7.36427 11.4856 7.06227 10.9584 6.61138 10.5782C6.16049 10.1981 5.58974 9.98964 5 9.98964C4.41026 9.98964 3.83951 10.1981 3.38862 10.5782C2.93773 10.9584 2.63573 11.4856 2.536 12.0669C2.43628 12.6481 2.54524 13.2459 2.84364 13.7546C3.14204 14.2633 3.61066 14.6501 4.16667 14.8467V18.3333H1.66667V1.66667H5V6.66667H6.66667V1.66667H8.33333V10H10V1.66667H18.3333V5ZM15 5.83333C15 5.99815 14.9511 6.15927 14.8596 6.29631C14.768 6.43335 14.6378 6.54016 14.4856 6.60323C14.3333 6.66631 14.1657 6.68281 14.0041 6.65065C13.8424 6.6185 13.694 6.53913 13.5774 6.42259C13.4609 6.30605 13.3815 6.15756 13.3493 5.99591C13.3172 5.83426 13.3337 5.6667 13.3968 5.51443C13.4598 5.36216 13.5666 5.23201 13.7037 5.14044C13.8407 5.04887 14.0018 5 14.1667 5C14.3876 5.00022 14.5994 5.08809 14.7557 5.24432C14.9119 5.40055 14.9998 5.61239 15 5.83333Z"
                  />
                </svg>
              </div>{" "}
              &nbsp;
              <div className=" pl-3 py-2 text-center hidden lg:block">
                Inventory
              </div>
            </div>
          </NavLink>
        )}

        {allowed.includes(level) && (
          <NavLink
            className="pl-6 hover:bg-[#393A3C] rounded-[5px]"
            to="/admin/adminmeetings"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[20px] w-[20px]"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  stroke-width="1"
                >
                <path xmlns="http://www.w3.org/2000/svg" d="M6.94444 11.1109C6.94444 12.3387 5.95 13.3331 4.72222 13.3331C3.49444 13.3331 2.5 12.3387 2.5 11.1109C2.5 9.88312 3.49444 8.88867 4.72222 8.88867C5.95 8.88867 6.94444 9.88312 6.94444 11.1109Z" fill="#FFB742"/>
                <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M4.72222 12.222C5.01691 12.222 5.29952 12.1049 5.5079 11.8966C5.71627 11.6882 5.83333 11.4056 5.83333 11.1109C5.83333 10.8162 5.71627 10.5336 5.5079 10.3252C5.29952 10.1168 5.01691 9.99978 4.72222 9.99978C4.42754 9.99978 4.14492 10.1168 3.93655 10.3252C3.72817 10.5336 3.61111 10.8162 3.61111 11.1109C3.61111 11.4056 3.72817 11.6882 3.93655 11.8966C4.14492 12.1049 4.42754 12.222 4.72222 12.222ZM4.72222 13.3331C5.95 13.3331 6.94444 12.3387 6.94444 11.1109C6.94444 9.88312 5.95 8.88867 4.72222 8.88867C3.49444 8.88867 2.5 9.88312 2.5 11.1109C2.5 12.3387 3.49444 13.3331 4.72222 13.3331Z" fill="#FFB742"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M0 16.9693C0 15.2904 3.14611 14.4443 4.72222 14.4443C6.29833 14.4443 9.44444 15.2904 9.44444 16.9693V19.9999H0V16.9693Z" fill="#FFB742"/>

                <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M1.29667 16.6571C1.12111 16.8304 1.11111 16.9299 1.11111 16.9699V18.8888H8.33333V16.9693C8.33333 16.9304 8.32333 16.8304 8.14778 16.6571C7.96222 16.4743 7.65611 16.2782 7.23667 16.0988C6.39222 15.7371 5.36111 15.5554 4.72222 15.5554C4.08333 15.5554 3.05167 15.7371 2.20778 16.0988C1.78833 16.2782 1.48222 16.4743 1.29667 16.6571ZM4.72222 14.4443C3.14611 14.4443 0 15.2904 0 16.9693V19.9999H9.44444V16.9693C9.44444 15.2904 6.29833 14.4443 4.72222 14.4443Z" fill="#FFB742"/>

                <path xmlns="http://www.w3.org/2000/svg" d="M17.5001 11.1109C17.5001 12.3387 16.5057 13.3331 15.2779 13.3331C14.0501 13.3331 13.0557 12.3387 13.0557 11.1109C13.0557 9.88312 14.0501 8.88867 15.2779 8.88867C16.5057 8.88867 17.5001 9.88312 17.5001 11.1109Z" fill="#FFB742"/>

                <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M15.2779 12.222C15.5726 12.222 15.8552 12.1049 16.0636 11.8966C16.2719 11.6882 16.389 11.4056 16.389 11.1109C16.389 10.8162 16.2719 10.5336 16.0636 10.3252C15.8552 10.1168 15.5726 9.99978 15.2779 9.99978C14.9832 9.99978 14.7006 10.1168 14.4922 10.3252C14.2838 10.5336 14.1668 10.8162 14.1668 11.1109C14.1668 11.4056 14.2838 11.6882 14.4922 11.8966C14.7006 12.1049 14.9832 12.222 15.2779 12.222ZM15.2779 13.3331C16.5057 13.3331 17.5001 12.3387 17.5001 11.1109C17.5001 9.88312 16.5057 8.88867 15.2779 8.88867C14.0501 8.88867 13.0557 9.88312 13.0557 11.1109C13.0557 12.3387 14.0501 13.3331 15.2779 13.3331Z" fill="#FFB742"/>

                <path xmlns="http://www.w3.org/2000/svg" d="M12.2223 10.0001C12.2223 11.2278 11.2278 12.2223 10.0001 12.2223C8.77228 12.2223 7.77783 11.2278 7.77783 10.0001C7.77783 8.77228 8.77228 7.77783 10.0001 7.77783C11.2278 7.77783 12.2223 8.77228 12.2223 10.0001Z" fill="#FFB742"/>

                <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 11.1112C10.2947 11.1112 10.5774 10.9941 10.7857 10.7857C10.9941 10.5774 11.1112 10.2947 11.1112 10.0001C11.1112 9.70537 10.9941 9.42275 10.7857 9.21438C10.5774 9.00601 10.2947 8.88894 10.0001 8.88894C9.70537 8.88894 9.42275 9.00601 9.21438 9.21438C9.00601 9.42275 8.88894 9.70537 8.88894 10.0001C8.88894 10.2947 9.00601 10.5774 9.21438 10.7857C9.42275 10.9941 9.70537 11.1112 10.0001 11.1112ZM10.0001 12.2223C11.2278 12.2223 12.2223 11.2278 12.2223 10.0001C12.2223 8.77228 11.2278 7.77783 10.0001 7.77783C8.77228 7.77783 7.77783 8.77228 7.77783 10.0001C7.77783 11.2278 8.77228 12.2223 10.0001 12.2223Z" fill="#FFB742"/>

                <path xmlns="http://www.w3.org/2000/svg" d="M9.44446 3.79611C9.44446 3.08401 9.16158 2.40106 8.65805 1.89753C8.15451 1.39399 7.47157 1.11111 6.75946 1.11111H4.99891C4.27043 1.10994 3.57066 1.3951 3.0505 1.90511C2.53033 2.41512 2.23142 3.10913 2.21823 3.83749C2.20504 4.56585 2.47861 5.27023 2.97997 5.79874C3.48133 6.32725 4.17031 6.63757 4.89835 6.66278L5.00002 6.66667V7.77778C5.00002 7.77778 9.44446 7.12945 9.44446 3.79611ZM11.1111 2.90889C11.1111 2.1374 11.4176 1.39752 11.9631 0.851994C12.5086 0.306471 13.2485 0 14.02 0H17.2222C17.959 0 18.6655 0.292658 19.1864 0.813592C19.7074 1.33453 20 2.04107 20 2.77778C20 3.51449 19.7074 4.22103 19.1864 4.74196C18.6655 5.2629 17.959 5.55556 17.2222 5.55556H16.1111V7.22222C16.1111 7.22222 11.1111 6.52 11.1111 2.90889ZM10.5556 16.9694C10.5556 15.2906 13.7017 14.4444 15.2778 14.4444C16.8539 14.4444 20 15.2906 20 16.9694V20H10.5556V16.9694Z" fill="#FFB742"/>

                <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.8521 16.6574C11.6766 16.8307 11.6666 16.9302 11.6666 16.9702V18.8891H18.8888V16.9696C18.8888 16.9307 18.8788 16.8307 18.7032 16.6574C18.5177 16.4746 18.2116 16.2785 17.7921 16.0991C16.9477 15.7374 15.9166 15.5557 15.2777 15.5557C14.6388 15.5557 13.6071 15.7374 12.7632 16.0991C12.3438 16.2785 12.0377 16.4746 11.8521 16.6574ZM15.2777 14.4446C13.7016 14.4446 10.5555 15.2907 10.5555 16.9696V20.0002H19.9999V16.9696C19.9999 15.2907 16.8538 14.4446 15.2777 14.4446ZM9.9999 15.8585C9.9999 14.9268 8.97379 14.2513 7.7749 13.8346C8.47065 13.5059 9.23039 13.3347 9.9999 13.3335C10.7694 13.3347 11.5292 13.5059 12.2249 13.8346C11.0266 14.2513 9.9999 14.9268 9.9999 15.8585Z" fill="#FFB742"/>

                <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M9.9999 15.8585C9.9999 15.3624 10.291 14.9385 10.7443 14.5879C10.7703 14.5681 10.7966 14.5486 10.8232 14.5296C11.2099 14.2485 11.701 14.0168 12.2249 13.8352C11.7045 13.5898 11.1476 13.4312 10.576 13.3657C10.1933 13.3228 9.80703 13.3228 9.42435 13.3657C8.85264 13.431 8.29546 13.5894 7.7749 13.8346C8.29879 14.0168 8.7899 14.2485 9.17712 14.5291C9.20379 14.5485 9.22935 14.5679 9.2549 14.5879C9.70879 14.9379 9.9999 15.3624 9.9999 15.8585Z" fill="#FFB742"/>






                </svg>
              </div>{" "}
              &nbsp;
              <div className=" pl-3 py-2 text-center hidden lg:block">
                Meetings
              </div>
            </div>
          </NavLink>
        )}

        {allowed.includes(level) && (
          <NavLink
            className="pl-6 hover:bg-[#393A3C] rounded-[5px]"
            to="/admin/adminprojects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[20px] w-[20px]"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M17.1522 12.4166L17.7705 13.035C17.9333 13.1977 17.9333 13.4581 17.7705 13.6208L17.2661 14.1253C17.3963 14.3857 17.5102 14.6623 17.5753 14.9552H18.2262C18.454 14.9552 18.6493 15.1505 18.6493 15.3784V16.2571C18.6493 16.4849 18.454 16.6802 18.2262 16.6802H17.5264C17.4451 16.9569 17.3149 17.2335 17.1684 17.4776L17.6241 17.9333C17.7868 18.096 17.7868 18.3564 17.6241 18.5191L17.0057 19.1375C16.843 19.3002 16.5826 19.3002 16.4199 19.1375L15.9154 18.633C15.655 18.7632 15.3784 18.8771 15.0854 18.9422V19.5932C15.0854 19.821 14.8902 20.0163 14.6623 20.0163H13.7836C13.5557 20.0163 13.3605 19.821 13.3605 19.5932V18.8771C13.0838 18.7958 12.8072 18.6656 12.5631 18.5191L12.1074 18.9748C11.9447 19.1375 11.6843 19.1375 11.5216 18.9748L10.9032 18.3564C10.7404 18.1937 10.7404 17.9333 10.9032 17.7705L11.4076 17.2661C11.2775 17.0057 11.1635 16.729 11.0985 16.4361H10.4475C10.2197 16.4361 10.0244 16.2408 10.0244 16.013V15.1343C10.0244 14.9064 10.2197 14.7111 10.4475 14.7111H11.1473C11.2286 14.4345 11.3588 14.1579 11.5053 13.9138L11.0659 13.4744C10.9032 13.3116 10.9032 13.0513 11.0659 12.8885L11.6843 12.2701C11.847 12.1074 12.1074 12.1074 12.2701 12.2701L12.7746 12.7746C13.035 12.6444 13.3116 12.5305 13.6046 12.4654V11.8145C13.6046 11.5867 13.7998 11.3914 14.0277 11.3914H14.9064C15.1343 11.3914 15.3295 11.5867 15.3295 11.8145V12.5142C15.6062 12.5956 15.8828 12.7258 16.1269 12.8723L16.5826 12.4166C16.7128 12.2539 16.9894 12.2539 17.1522 12.4166ZM6.73719 13.3767C6.50936 13.3767 6.33035 13.1489 6.33035 12.8885C6.33035 12.6119 6.50936 12.4003 6.73719 12.4003H8.75509C8.98291 12.4003 9.16192 12.6282 9.16192 12.8885C9.16192 13.1652 8.98291 13.3767 8.75509 13.3767H6.73719ZM7.3393 18.275C7.61595 18.275 7.8275 18.5028 7.8275 18.7632C7.8275 19.0399 7.59967 19.2514 7.3393 19.2514H1.15541C0.846216 19.2514 0.553295 19.1212 0.341741 18.9097C0.130187 18.6981 0 18.4215 0 18.096V1.15541C0 0.829943 0.130187 0.553295 0.341741 0.341741C0.553295 0.130187 0.829943 0 1.15541 0H15.2644C15.5736 0 15.8666 0.130187 16.0781 0.341741C16.2897 0.553295 16.4199 0.829943 16.4199 1.15541V9.01546C16.4199 9.29211 16.192 9.50366 15.9317 9.50366C15.655 9.50366 15.4435 9.27583 15.4435 9.01546V1.15541C15.4435 1.10659 15.4272 1.07404 15.3946 1.0415C15.3621 1.00895 15.3295 0.992677 15.2807 0.992677H1.15541C1.10659 0.992677 1.07404 1.00895 1.0415 1.0415C1.00895 1.05777 0.992677 1.10659 0.992677 1.15541V18.1286C0.992677 18.1774 1.00895 18.2099 1.0415 18.2425C1.07404 18.275 1.10659 18.2913 1.15541 18.2913H7.3393V18.275ZM3.0594 12.0586H4.80065C4.89829 12.0586 4.96339 12.1237 4.96339 12.2213V13.7185C4.96339 13.8161 4.89829 13.8812 4.80065 13.8812H3.0594C2.96176 13.8812 2.89666 13.8161 2.89666 13.7185V12.2213C2.89666 12.1237 2.96176 12.0586 3.0594 12.0586ZM3.0594 3.44996H4.80065C4.89829 3.44996 4.96339 3.51505 4.96339 3.61269V5.10985C4.96339 5.20749 4.89829 5.27258 4.80065 5.27258H3.0594C2.96176 5.27258 2.89666 5.20749 2.89666 5.10985V3.61269C2.89666 3.51505 2.96176 3.44996 3.0594 3.44996ZM6.73719 4.7681C6.50936 4.7681 6.33035 4.54028 6.33035 4.2799C6.33035 4.00325 6.50936 3.7917 6.73719 3.7917H12.3841C12.6119 3.7917 12.7909 4.01953 12.7909 4.2799C12.7909 4.55655 12.6119 4.7681 12.3841 4.7681H6.73719ZM3.56387 9.34093C3.44996 9.42229 3.3035 9.40602 3.18959 9.29211C3.17331 9.27583 3.17331 9.27583 3.15704 9.25956L2.63629 8.72254C2.52238 8.60862 2.55492 8.42962 2.68511 8.29943C2.83157 8.18552 3.02685 8.16924 3.14076 8.28316L3.41741 8.57608L4.32872 7.84378C4.44264 7.74614 4.63792 7.79495 4.73556 7.94142C4.84947 8.08788 4.8332 8.29943 4.70301 8.39707L3.56387 9.34093ZM6.46054 8.91782C6.23271 8.91782 6.0537 8.68999 6.0537 8.42962C6.0537 8.15297 6.23271 7.94142 6.46054 7.94142H12.1074C12.3352 7.94142 12.5142 8.16924 12.5142 8.42962C12.5142 8.70627 12.3352 8.91782 12.1074 8.91782H6.46054ZM14.3369 13.9788C15.2807 13.9788 16.0618 14.7437 16.0618 15.7038C16.0618 16.6477 15.297 17.4288 14.3369 17.4288C13.393 17.4288 12.6119 16.664 12.6119 15.7038C12.6119 14.7437 13.393 13.9788 14.3369 13.9788Z" fill="#FFB742"
                    />
                  
                </svg>
              </div>{" "}
              &nbsp;
              <div className=" pl-3 py-2 text-center hidden lg:block">
                Projects
              </div>
            </div>
          </NavLink>
        )}

        {allowed.includes(level) && (
          <NavLink
            className="pl-6 hover:bg-[#393A3C] rounded-[5px]"
            to="/admin/adminblog"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex">
              <div className="py-2 text-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[20px] w-[20px]"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path xmlns="http://www.w3.org/2000/svg" d="M8 12.0161H12V10.0161H8V12.0161ZM8 9.01612H16V7.01612H8V9.01612ZM8 6.01612H16V4.01612H8V6.01612ZM6 16.0161C5.45 16.0161 4.979 15.8201 4.587 15.4281C4.195 15.0361 3.99934 14.5654 4 14.0161V2.01611C4 1.46611 4.196 0.995115 4.588 0.603115C4.98 0.211115 5.45067 0.0154483 6 0.016115H18C18.55 0.016115 19.021 0.212115 19.413 0.604115C19.805 0.996115 20.0007 1.46678 20 2.01611V14.0161C20 14.5661 19.804 15.0371 19.412 15.4291C19.02 15.8211 18.5493 16.0168 18 16.0161H6ZM2 20.0161C1.45 20.0161 0.979002 19.8201 0.587002 19.4281C0.195002 19.0361 -0.000664969 18.5654 1.69779e-06 18.0161V4.01612H2V18.0161H16V20.0161H2Z" fill="#FFB742"/>
                </svg>
              </div>{" "}
              &nbsp;
              <div className=" pl-3 py-2 text-center hidden lg:block">Blog</div>
            </div>
          </NavLink>
        )}

        <div className="pt-8">
          <div className="flex">
            <button onClick={logoutme} className="pl-6 py-1 text-yellow-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
            <button
              onClick={logoutme}
              className=" pl-3 hidden lg:block py-1 text-white  hover:text-yellow-500 hover:border-yellow-500 "
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
