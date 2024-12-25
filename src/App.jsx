import { useState } from "react";
import "./assets/css/App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <main className="flex flex-col flex-1">
          <div className="flex-none order-1 flex-grow-0"></div>
          {/* Frame 1116606648 */}
          <div className="flex flex-row items-center py-6 px-10 gap-2 border-b border-[#DCDFE4]">
            <div className="flex-none order-0 self-stretch flex-grow-0">
              <div className="flex flex-col justify-center items-center py-3 px-0 gap-3 w-[137px] h-[46px] bg-[#CCFBEF] rounded-[1200px]">
                <div className="flex-none order-0 flex-grow-0">
                  <div className="flex flex-row items-center py-0 px-3 w-[137px] h-[22px]">
                    <div className="flex-none order-0 flex-grow-0">
                      <a
                        href="#summary"
                        className="flex flex-row gap-2 justify-center items-center"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.81249 9.09609C7.90753 9.04123 7.98644 8.96231 8.04129 8.86727C8.09615 8.77223 8.12502 8.66442 8.12499 8.55469V2.92969C8.12443 2.83004 8.10006 2.73198 8.0539 2.64367C8.00774 2.55536 7.94113 2.47936 7.85964 2.42202C7.77814 2.36469 7.68412 2.32766 7.5854 2.31405C7.48669 2.30043 7.38616 2.31062 7.29218 2.34375C5.46794 2.98939 3.93383 4.26457 2.96563 5.94005C1.99743 7.61554 1.65863 9.58145 2.01015 11.4844C2.02837 11.5828 2.06995 11.6754 2.1314 11.7544C2.19285 11.8333 2.27237 11.8964 2.36327 11.9383C2.44519 11.9766 2.53456 11.9963 2.62499 11.9961C2.73469 11.9961 2.84247 11.9673 2.93749 11.9125L7.81249 9.09609ZM6.87499 3.87656V8.19375L3.13437 10.3523C3.12499 10.2344 3.12499 10.1156 3.12499 10C3.1261 8.73309 3.47678 7.49106 4.13843 6.41066C4.80007 5.33025 5.74701 4.45337 6.87499 3.87656ZM18.125 10C18.1256 11.7837 17.5393 13.518 16.4564 14.9354C15.3735 16.3528 13.8543 17.3745 12.1332 17.8428C10.4121 18.3111 8.58472 18.2 6.93298 17.5267C5.28125 16.8534 3.89698 15.6553 2.99374 14.1172C2.95164 14.0461 2.92403 13.9675 2.91251 13.8857C2.901 13.8039 2.9058 13.7207 2.92665 13.6407C2.9475 13.5608 2.98398 13.4859 3.03398 13.4201C3.08398 13.3544 3.14651 13.2992 3.21796 13.2578L9.37499 9.67422V2.5C9.37499 2.33424 9.44084 2.17527 9.55805 2.05806C9.67526 1.94085 9.83423 1.875 9.99999 1.875C11.4179 1.87572 12.8109 2.24729 14.0408 2.95282C15.2706 3.65834 16.2946 4.67328 17.0109 5.89688C17.0195 5.90938 17.0273 5.92188 17.0351 5.93516C17.043 5.94844 17.0508 5.96406 17.0578 5.97812C17.7588 7.20247 18.1268 8.58916 18.125 10Z"
                            fill="#212636"
                          />
                        </svg>
                        <h6 className="flex items-center font-inter not-italic font-medium text-lg leading-5 tracking-tight text-[#212636]">
                          Summary
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start py-3 px-0 gap-3 w-[102px] h-[46px]">
              <div className="flex-none order-1 self-stretch flex-grow-0">
                <div className="flex flex-col items-center py-0 px-3 gap-3">
                  <div className="flex-none order-0 flex-grow-0">
                    <a
                      href="#sales"
                      className="flex flex-row gap-2 justify-center items-center text-[#8A94A6] hover:text-gray-800 hover:rounded-[1200px]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        strokeWidth={0}
                      >
                        <path
                          d="M19.0086 10.625L11.25 2.86641C11.1343 2.74983 10.9967 2.65741 10.845 2.59451C10.6933 2.5316 10.5306 2.49948 10.3664 2.50001H3.125C2.95924 2.50001 2.80027 2.56585 2.68306 2.68306C2.56585 2.80027 2.5 2.95925 2.5 3.12501V10.3664C2.49948 10.5306 2.5316 10.6933 2.5945 10.845C2.6574 10.9967 2.74983 11.1344 2.86641 11.25L10.625 19.0086C10.7411 19.1247 10.8789 19.2168 11.0306 19.2796C11.1822 19.3425 11.3448 19.3748 11.509 19.3748C11.6732 19.3748 11.8357 19.3425 11.9874 19.2796C12.1391 19.2168 12.2769 19.1247 12.393 19.0086L19.0086 12.393C19.1247 12.2769 19.2168 12.1391 19.2796 11.9874C19.3425 11.8357 19.3748 11.6732 19.3748 11.509C19.3748 11.3448 19.3425 11.1822 19.2796 11.0306C19.2168 10.8789 19.1247 10.7411 19.0086 10.625ZM6.5625 7.50001C6.37708 7.50001 6.19582 7.44502 6.04165 7.34201C5.88748 7.239 5.76732 7.09258 5.69636 6.92127C5.62541 6.74997 5.60684 6.56147 5.64301 6.37961C5.67919 6.19775 5.76848 6.03071 5.89959 5.89959C6.0307 5.76848 6.19775 5.67919 6.3796 5.64302C6.56146 5.60685 6.74996 5.62541 6.92127 5.69637C7.09257 5.76733 7.23899 5.88749 7.342 6.04166C7.44502 6.19583 7.5 6.37709 7.5 6.56251C7.5 6.81115 7.40123 7.0496 7.22541 7.22542C7.0496 7.40123 6.81114 7.50001 6.5625 7.50001Z"
                          fill="currentColor"
                        />
                      </svg>

                      <h6 className="flex items-center font-inter font-medium not-italic text-lg leading-5 tracking-tight">
                        Sales
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start py-3 px-0 w-[106px] h-[46px]">
              <div className="flex-none order-2 self-stretch flex-grow-0">
                <div className="flex flex-row items-center py-0 px-3 gap-3 w-[106px] h-[22px]">
                  <a
                    href="#chats"
                    className="flex flex-row gap-2 justify-center items-center text-[#8A94A6] hover:text-gray-800 hover:rounded-[1200px]"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth={0}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3125 1.875C8.24119 1.87727 6.25538 2.70111 4.79074 4.16574C3.32611 5.63038 2.50227 7.61619 2.5 9.6875V16.2758C2.50041 16.6003 2.62953 16.9115 2.85902 17.141C3.08852 17.3705 3.39966 17.4996 3.72422 17.5H10.3125C12.3845 17.5 14.3716 16.6769 15.8368 15.2118C17.3019 13.7466 18.125 11.7595 18.125 9.6875C18.125 7.6155 17.3019 5.62836 15.8368 4.16323C14.3716 2.6981 12.3845 1.875 10.3125 1.875ZM12.5 11.875H7.5C7.33424 11.875 7.17527 11.8092 7.05806 11.6919C6.94085 11.5747 6.875 11.4158 6.875 11.25C6.875 11.0842 6.94085 10.9253 7.05806 10.8081C7.17527 10.6908 7.33424 10.625 7.5 10.625H12.5C12.6658 10.625 12.8247 10.6908 12.9419 10.8081C13.0592 10.9253 13.125 11.0842 13.125 11.25C13.125 11.4158 13.0592 11.5747 12.9419 11.6919C12.8247 11.8092 12.6658 11.875 12.5 11.875ZM12.5 9.375H7.5C7.33424 9.375 7.17527 9.30915 7.05806 9.19194C6.94085 9.07473 6.875 8.91576 6.875 8.75C6.875 8.58424 6.94085 8.42527 7.05806 8.30806C7.17527 8.19085 7.33424 8.125 7.5 8.125H12.5C12.6658 8.125 12.8247 8.19085 12.9419 8.30806C13.0592 8.42527 13.125 8.58424 13.125 8.75C13.125 8.91576 13.0592 9.07473 12.9419 9.19194C12.8247 9.30915 12.6658 9.375 12.5 9.375Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h6 className="flex items-center font-inter not-italic font-medium text-lg leading-5 tracking-tight">
                      Chats
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start p-0 m-9">
            <section className="flex bg-white shadow-custom rounded-[20px] w-full">
              <div className="flex flex-col items-start p-0 w-full md:flex-col">
                <div className="flex px-6 pt-8 pb-4 gap-6 w-full">
                  <div className="flex items-center justify-between w-full p-0 gap-6">
                    <h4 className="flex items-center font-inter font-medium text-[32px] tracking-tight leading-8 text-[#212636] tracking-[-0.02em]">
                      At a glance
                    </h4>

                    <div className="flex flex-row items-center gap-4">
                      <select
                        name="date"
                        id=""
                        className="flex items-center w-[97px] h-[36px] font-inter font-normal text-lg leading-5 text-[#212636] border rounded"
                      >
                        <option value="7 days">7 days</option>
                        <option value="15 days">15 days</option>
                        <option value="1 month">1 month</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:py-2 md:p-7 p-5 w-full overflow-hidden">
                  {/* <div className="flex-none order-1 self-stretch flex-grow-0"> */}
                  {/* <div className="p-0 w-full"> */}
                  <div className="flex items-center order-0 self-stretch flex-grow-0 py-7 shadow-custom rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-2 w-full pl-6">
                      <div className="flex-none order-0 flex-grow-1">
                        <div className="flex flex-row items-center gap-2">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z"
                              fill="#667085"
                            />
                          </svg>
                          <span className="font-inter font-semibold not-italic text-xs leading-[30px] tracking-[0.5px] uppercase text-[#667085]">
                            Consultations
                          </span>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-1 py-1">
                        <div className="flex flex-row items-center gap-2">
                          <h6 className=" font-inter font-normal not-italic text-[32px] leading-5 text-[#212636]">
                            24
                          </h6>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-0">
                        <div className="flex flex-row items-start p-0 gap-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.06031L13.2806 14.7806C13.211 14.8504 13.1283 14.9057 13.0372 14.9434C12.9462 14.9812 12.8486 15.0006 12.75 15.0006C12.6514 15.0006 12.5538 14.9812 12.4628 14.9434C12.3717 14.9057 12.289 14.8504 12.2194 14.7806L9 11.5603L2.78062 17.7806C2.63989 17.9214 2.44902 18.0004 2.25 18.0004C2.05097 18.0004 1.8601 17.9214 1.71937 17.7806C1.57864 17.6399 1.49958 17.449 1.49958 17.25C1.49958 17.051 1.57864 16.8601 1.71937 16.7194L8.46937 9.96937C8.53903 9.89964 8.62174 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19615 9.76884 9.2872 9.80658C9.37825 9.84432 9.46097 9.89964 9.53062 9.96937L12.75 13.1897L19.9397 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25Z"
                              fill="#15B79F"
                            />
                          </svg>
                          <div className="flex-none order-2 self-stretch flex-grow-0 h-[22px]">
                            <span className="font-inter font-normal not-italic text-sm tracking-[-0.01em] leading-[22px] text-[#15B79F]">
                              15%
                            </span>
                            <span className="font-inter font-normal not-italic ml-0.5 text-[#667085]">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center order-0 self-stretch flex-grow-0 py-7 shadow-custom rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-2 w-full pl-6">
                      <div className="flex-none order-0 flex-grow-1">
                        <div className="flex flex-row items-center gap-2">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.4052 5.375L5.75 0.719847C5.68061 0.6499 5.59801 0.594444 5.507 0.556703C5.41598 0.518962 5.31838 0.499689 5.21985 0.500004H0.875004C0.775548 0.500004 0.680165 0.539513 0.609839 0.609839C0.539513 0.680165 0.500004 0.775548 0.500004 0.875004V5.21985C0.499689 5.31838 0.518962 5.41598 0.556703 5.507C0.594444 5.59801 0.6499 5.68061 0.719847 5.75L5.375 10.4052C5.44465 10.4748 5.52734 10.5301 5.61834 10.5678C5.70935 10.6055 5.80689 10.6249 5.90539 10.6249C6.0039 10.6249 6.10144 10.6055 6.19245 10.5678C6.28345 10.5301 6.36614 10.4748 6.43579 10.4052L10.4052 6.43579C10.4748 6.36614 10.5301 6.28345 10.5678 6.19245C10.6055 6.10144 10.6249 6.0039 10.6249 5.90539C10.6249 5.80689 10.6055 5.70935 10.5678 5.61834C10.5301 5.52734 10.4748 5.44465 10.4052 5.375ZM2.9375 3.5C2.82625 3.5 2.7175 3.46701 2.625 3.40521C2.53249 3.3434 2.4604 3.25555 2.41782 3.15276C2.37525 3.04998 2.36411 2.93688 2.38581 2.82777C2.40752 2.71865 2.46109 2.61842 2.53976 2.53976C2.61842 2.46109 2.71865 2.40752 2.82777 2.38581C2.93688 2.36411 3.04998 2.37525 3.15276 2.41782C3.25555 2.4604 3.3434 2.53249 3.40521 2.625C3.46701 2.7175 3.5 2.82625 3.5 2.9375C3.5 3.08669 3.44074 3.22976 3.33525 3.33525C3.22976 3.44074 3.08669 3.5 2.9375 3.5Z"
                              fill="#667085"
                            />
                          </svg>

                          <span className="font-inter font-semibold not-italic text-xs leading-[30px] tracking-[0.5px] uppercase text-[#667085]">
                            ORDERS PLACES
                          </span>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-1 py-1">
                        <div className="flex flex-row items-center gap-2">
                          <h6 className=" font-inter font-normal not-italic text-[32px] leading-5 text-[#212636]">
                            12
                          </h6>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-0">
                        <div className="flex flex-row items-start p-0 gap-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.5 12.75V18.75C22.5 18.9489 22.421 19.1397 22.2803 19.2803C22.1397 19.421 21.9489 19.5 21.75 19.5H15.75C15.5511 19.5 15.3603 19.421 15.2197 19.2803C15.079 19.1397 15 18.9489 15 18.75C15 18.5511 15.079 18.3603 15.2197 18.2197C15.3603 18.079 15.5511 18 15.75 18H19.9397L12.75 10.8103L9.53061 14.0306C9.46096 14.1004 9.37824 14.1557 9.2872 14.1934C9.19615 14.2312 9.09855 14.2506 8.99999 14.2506C8.90143 14.2506 8.80383 14.2312 8.71278 14.1934C8.62174 14.1557 8.53902 14.1004 8.46936 14.0306L1.71936 7.28063C1.57863 7.1399 1.49957 6.94903 1.49957 6.75C1.49957 6.55098 1.57863 6.36011 1.71936 6.21938C1.8601 6.07865 2.05097 5.99959 2.24999 5.99959C2.44901 5.99959 2.63988 6.07865 2.78061 6.21938L8.99999 12.4397L12.2194 9.21938C12.289 9.14965 12.3717 9.09433 12.4628 9.05659C12.5538 9.01884 12.6514 8.99941 12.75 8.99941C12.8486 8.99941 12.9461 9.01884 13.0372 9.05659C13.1282 9.09433 13.211 9.14965 13.2806 9.21938L21 16.9397V12.75C21 12.5511 21.079 12.3603 21.2197 12.2197C21.3603 12.079 21.5511 12 21.75 12C21.9489 12 22.1397 12.079 22.2803 12.2197C22.421 12.3603 22.5 12.5511 22.5 12.75Z"
                              fill="#F04438"
                            />
                          </svg>

                          <div className="flex-none order-2 self-stretch flex-grow-0 h-[22px]">
                            <span className="font-inter font-normal not-italic text-sm tracking-[-0.01em] leading-[22px] text-[#F04438]">
                              15%
                            </span>
                            <span className="font-inter font-normal not-italic ml-0.5 text-[#667085]">
                              decrease
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center order-0 self-stretch flex-grow-0 py-7 shadow-custom rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-2 w-full pl-6">
                      <div className="flex-none order-0 flex-grow-1">
                        <div className="flex flex-row items-center gap-2">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.4061 4.2614L5.38686 10.2802C5.31722 10.3498 5.23453 10.4051 5.14353 10.4428C5.05252 10.4805 4.95498 10.4999 4.85647 10.4999C4.75797 10.4999 4.66043 10.4805 4.56942 10.4428C4.47842 10.4051 4.39573 10.3498 4.32608 10.2802L0.968896 6.90515C0.828493 6.76453 0.749634 6.57394 0.749634 6.37523C0.749634 6.17652 0.828493 5.98593 0.968896 5.84531L2.0939 4.72031C2.23407 4.5801 2.42405 4.5011 2.6223 4.50057C2.82055 4.50005 3.01095 4.57804 3.15186 4.7175L4.86936 6.37078L4.87452 6.37594L9.22124 2.09297C9.3618 1.95299 9.55209 1.8744 9.75046 1.8744C9.94883 1.8744 10.1391 1.95299 10.2797 2.09297L11.4047 3.19734C11.4749 3.26695 11.5307 3.34977 11.5688 3.44103C11.6069 3.53229 11.6266 3.63018 11.6268 3.72908C11.6269 3.82798 11.6075 3.92592 11.5696 4.01728C11.5317 4.10864 11.4761 4.19161 11.4061 4.2614Z"
                              fill="#667085"
                            />
                          </svg>

                          <span className="font-inter font-semibold not-italic text-xs leading-[30px] tracking-[0.5px] uppercase text-[#667085]">
                            conversion
                          </span>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-1 py-1">
                        <div className="flex flex-row items-center gap-2">
                          <h6 className=" font-inter font-normal not-italic text-[32px] leading-5 text-[#212636]">
                            50%
                          </h6>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-0">
                        <div className="flex flex-row items-start p-0 gap-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.5 12.75V18.75C22.5 18.9489 22.421 19.1397 22.2803 19.2803C22.1397 19.421 21.9489 19.5 21.75 19.5H15.75C15.5511 19.5 15.3603 19.421 15.2197 19.2803C15.079 19.1397 15 18.9489 15 18.75C15 18.5511 15.079 18.3603 15.2197 18.2197C15.3603 18.079 15.5511 18 15.75 18H19.9397L12.75 10.8103L9.53061 14.0306C9.46096 14.1004 9.37824 14.1557 9.2872 14.1934C9.19615 14.2312 9.09855 14.2506 8.99999 14.2506C8.90143 14.2506 8.80383 14.2312 8.71278 14.1934C8.62174 14.1557 8.53902 14.1004 8.46936 14.0306L1.71936 7.28063C1.57863 7.1399 1.49957 6.94903 1.49957 6.75C1.49957 6.55098 1.57863 6.36011 1.71936 6.21938C1.8601 6.07865 2.05097 5.99959 2.24999 5.99959C2.44901 5.99959 2.63988 6.07865 2.78061 6.21938L8.99999 12.4397L12.2194 9.21938C12.289 9.14965 12.3717 9.09433 12.4628 9.05659C12.5538 9.01884 12.6514 8.99941 12.75 8.99941C12.8486 8.99941 12.9461 9.01884 13.0372 9.05659C13.1282 9.09433 13.211 9.14965 13.2806 9.21938L21 16.9397V12.75C21 12.5511 21.079 12.3603 21.2197 12.2197C21.3603 12.079 21.5511 12 21.75 12C21.9489 12 22.1397 12.079 22.2803 12.2197C22.421 12.3603 22.5 12.5511 22.5 12.75Z"
                              fill="#F04438"
                            />
                          </svg>

                          <div className="flex-none order-2 self-stretch flex-grow-0 h-[22px]">
                            <span className="font-inter font-normal not-italic text-sm tracking-[-0.01em] leading-[22px] text-[#F04438]">
                              15%
                            </span>
                            <span className="font-inter font-normal not-italic ml-0.5 text-[#667085]">
                              decrease
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div/> */}
                  {/* </div> */}
                  <div className="flex items-center order-0 self-stretch flex-grow-0 py-7 shadow-custom rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-2 w-full pl-6">
                      <div className="flex-none order-0 flex-grow-1">
                        <div className="flex flex-row items-center gap-2">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62501 4.19859V3.9375C8.62501 2.76188 6.85173 1.875 4.50001 1.875C2.14829 1.875 0.375008 2.76188 0.375008 3.9375V5.8125C0.375008 6.79172 1.60548 7.56984 3.37501 7.80281V8.0625C3.37501 9.23812 5.14829 10.125 7.50001 10.125C9.85173 10.125 11.625 9.23812 11.625 8.0625V6.1875C11.625 5.21719 10.4334 4.43812 8.62501 4.19859ZM2.62501 6.88453C1.70673 6.62812 1.12501 6.20578 1.12501 5.8125V5.15297C1.50751 5.42391 2.01985 5.64234 2.62501 5.78906V6.88453ZM6.37501 5.78906C6.98016 5.64234 7.49251 5.42391 7.87501 5.15297V5.8125C7.87501 6.20578 7.29329 6.62812 6.37501 6.88453V5.78906ZM5.62501 9.13453C4.70673 8.87812 4.12501 8.45578 4.12501 8.0625V7.86703C4.24829 7.87172 4.37298 7.875 4.50001 7.875C4.68188 7.875 4.85954 7.86891 5.03391 7.85859C5.22763 7.92794 5.42495 7.98678 5.62501 8.03484V9.13453ZM5.62501 7.04297C5.25254 7.09799 4.87652 7.12541 4.50001 7.125C4.1235 7.12541 3.74747 7.09799 3.37501 7.04297V5.92781C3.74803 5.97642 4.12383 6.00053 4.50001 6C4.87618 6.00053 5.25199 5.97642 5.62501 5.92781V7.04297ZM8.62501 9.29297C7.87899 9.40234 7.12102 9.40234 6.37501 9.29297V8.175C6.74791 8.22513 7.12375 8.25018 7.50001 8.25C7.87618 8.25053 8.25199 8.22642 8.62501 8.17781V9.29297ZM10.875 8.0625C10.875 8.45578 10.2933 8.87812 9.37501 9.13453V8.03906C9.98016 7.89234 10.4925 7.67391 10.875 7.40297V8.0625Z"
                              fill="#667085"
                            />
                          </svg>

                          <span className="font-inter font-semibold not-italic text-xs leading-[30px] tracking-[0.5px] uppercase text-[#667085]">
                            Total sales value
                          </span>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-1 py-1">
                        <div className="flex flex-row items-center gap-2">
                          <h6 className=" font-inter font-normal not-italic text-[32px] leading-5 text-[#212636]">
                            $2,400
                          </h6>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-0">
                        <div className="flex flex-row items-start p-0 gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 11.25V5.25C22.5 5.05109 22.421 4.86032 22.2803 4.71967C22.1397 4.57902 21.9489 4.5 21.75 4.5H15.75C15.5511 4.5 15.3603 4.57902 15.2197 4.71967C15.079 4.86032 15 5.05109 15 5.25C15 5.44891 15.079 5.63968 15.2197 5.78033C15.3603 5.92098 15.5511 6 15.75 6H19.9397L12.75 13.1897L9.53062 9.96937C9.46097 9.89964 9.37825 9.84432 9.2872 9.80658C9.19615 9.76884 9.09856 9.74941 9 9.74941C8.90144 9.74941 8.80384 9.76884 8.71279 9.80658C8.62174 9.84432 8.53903 9.89964 8.46937 9.96937L1.71937 16.7194C1.57864 16.8601 1.49958 17.051 1.49958 17.25C1.49958 17.449 1.57864 17.6399 1.71937 17.7806C1.8601 17.9214 2.05097 18.0004 2.25 18.0004C2.44902 18.0004 2.63989 17.9214 2.78062 17.7806L9 11.5603L12.2194 14.7806C12.289 14.8504 12.3717 14.9057 12.4628 14.9434C12.5538 14.9812 12.6514 15.0006 12.75 15.0006C12.8486 15.0006 12.9462 14.9812 13.0372 14.9434C13.1283 14.9057 13.211 14.8504 13.2806 14.7806L21 7.06031V11.25C21 11.4489 21.079 11.6397 21.2197 11.7803C21.3603 11.921 21.5511 12 21.75 12C21.9489 12 22.1397 11.921 22.2803 11.7803C22.421 11.6397 22.5 11.4489 22.5 11.25Z" fill="#15B79F"/>
</svg>

                          

                          <div className="flex-none order-2 self-stretch flex-grow-0 h-[22px]">
                            <span className="font-inter font-normal not-italic text-sm tracking-[-0.01em] leading-[22px] text-[#15B79F]">
                              15%
                            </span>
                            <span className="font-inter font-normal not-italic ml-0.5 text-[#667085]">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center order-0 self-stretch flex-grow-0 py-7 shadow-custom rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-2 w-full pl-6">
                      <div className="flex-none order-0 flex-grow-1">
                        <div className="flex flex-row items-center gap-2">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.73031 0.9925C8.75859 0.506875 7.46859 0.25 6 0.25C4.53141 0.25 3.24141 0.506875 2.26969 0.9925C1.29797 1.47812 0.75 2.16156 0.75 2.875V5.125C0.75 5.83844 1.30406 6.52422 2.26969 7.0075C3.23531 7.49078 4.53141 7.75 6 7.75C7.46859 7.75 8.75859 7.49313 9.73031 7.0075C10.702 6.52188 11.25 5.83844 11.25 5.125V2.875C11.25 2.16156 10.6959 1.47578 9.73031 0.9925ZM5.625 5.4925V6.9925C4.73438 6.96344 3.98438 6.83219 3.375 6.64141V5.17422C4.10959 5.36993 4.86496 5.4771 5.625 5.49344V5.4925ZM6.375 5.4925C7.13504 5.47616 7.89041 5.369 8.625 5.17328V6.64094C8.01562 6.83172 7.26562 6.96297 6.375 6.99203V5.4925ZM1.5 5.125V4.25922C1.73599 4.45511 1.99436 4.62237 2.26969 4.7575C2.38359 4.81422 2.50406 4.86766 2.625 4.91828V6.34375C1.88297 5.97625 1.5 5.51359 1.5 5.125ZM9.375 6.34375V4.91828C9.49734 4.86766 9.61641 4.81422 9.73031 4.7575C10.0056 4.62237 10.264 4.45511 10.5 4.25922V5.125C10.5 5.51359 10.117 5.97625 9.375 6.34375Z"
                              fill="#667085"
                            />
                          </svg>

                          <span className="font-inter font-semibold not-italic text-xs leading-[30px] tracking-[0.5px] uppercase text-[#667085]">
                            Avg Order Value
                          </span>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-1 py-1">
                        <div className="flex flex-row items-center gap-2">
                          <h6 className=" font-inter font-normal not-italic text-[32px] leading-5 text-[#212636]">
                            $240
                          </h6>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-0">
                        <div className="flex flex-row items-start p-0 gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 11.25V5.25C22.5 5.05109 22.421 4.86032 22.2803 4.71967C22.1397 4.57902 21.9489 4.5 21.75 4.5H15.75C15.5511 4.5 15.3603 4.57902 15.2197 4.71967C15.079 4.86032 15 5.05109 15 5.25C15 5.44891 15.079 5.63968 15.2197 5.78033C15.3603 5.92098 15.5511 6 15.75 6H19.9397L12.75 13.1897L9.53062 9.96937C9.46097 9.89964 9.37825 9.84432 9.2872 9.80658C9.19615 9.76884 9.09856 9.74941 9 9.74941C8.90144 9.74941 8.80384 9.76884 8.71279 9.80658C8.62174 9.84432 8.53903 9.89964 8.46937 9.96937L1.71937 16.7194C1.57864 16.8601 1.49958 17.051 1.49958 17.25C1.49958 17.449 1.57864 17.6399 1.71937 17.7806C1.8601 17.9214 2.05097 18.0004 2.25 18.0004C2.44902 18.0004 2.63989 17.9214 2.78062 17.7806L9 11.5603L12.2194 14.7806C12.289 14.8504 12.3717 14.9057 12.4628 14.9434C12.5538 14.9812 12.6514 15.0006 12.75 15.0006C12.8486 15.0006 12.9462 14.9812 13.0372 14.9434C13.1283 14.9057 13.211 14.8504 13.2806 14.7806L21 7.06031V11.25C21 11.4489 21.079 11.6397 21.2197 11.7803C21.3603 11.921 21.5511 12 21.75 12C21.9489 12 22.1397 11.921 22.2803 11.7803C22.421 11.6397 22.5 11.4489 22.5 11.25Z" fill="#15B79F"/>
</svg>


                          <div className="flex-none order-2 self-stretch flex-grow-0 h-[22px]">
                            <span className="font-inter font-normal not-italic text-sm tracking-[-0.01em] leading-[22px] text-[#15B79F]">
                              15%
                            </span>
                            <span className="font-inter font-normal not-italic ml-0.5 text-[#667085]">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center order-0 self-stretch flex-grow-0 py-7 shadow-custom rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-2 w-full pl-6">
                      <div className="flex-none order-0 flex-grow-1">
                        <div className="flex flex-row items-center gap-2">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.5938 4.12875C10.575 4.08187 10.5553 4.035 10.5352 3.98812C10.2327 3.29064 9.74327 2.69039 9.12094 2.25375H10.125C10.2245 2.25375 10.3198 2.21424 10.3902 2.14391C10.4605 2.07359 10.5 1.97821 10.5 1.87875C10.5 1.77929 10.4605 1.68391 10.3902 1.61358C10.3198 1.54326 10.2245 1.50375 10.125 1.50375H5.25C4.21317 1.50507 3.21475 1.89626 2.45301 2.59965C1.69126 3.30304 1.2219 4.26718 1.13813 5.30062C0.814201 5.38115 0.526387 5.56741 0.320244 5.82993C0.114102 6.09245 0.00140696 6.41622 0 6.75C0 6.84946 0.0395088 6.94484 0.109835 7.01517C0.180161 7.08549 0.275544 7.125 0.375 7.125C0.474456 7.125 0.569839 7.08549 0.640165 7.01517C0.710491 6.94484 0.75 6.84946 0.75 6.75C0.750087 6.61325 0.78756 6.47913 0.858364 6.36214C0.929169 6.24516 1.03061 6.14975 1.15172 6.08625C1.24506 6.92759 1.59588 7.71959 2.15625 8.35406L2.745 10.0022C2.79705 10.148 2.89293 10.2741 3.01949 10.3632C3.14605 10.4523 3.29708 10.5001 3.45187 10.5H4.04813C4.20284 10.5 4.35377 10.4522 4.48023 10.3631C4.6067 10.2739 4.70251 10.1479 4.75453 10.0022L4.84453 9.75H7.53047L7.62047 10.0022C7.67249 10.1479 7.7683 10.2739 7.89477 10.3631C8.02123 10.4522 8.17216 10.5 8.32687 10.5H8.92313C9.07784 10.5 9.22877 10.4522 9.35523 10.3631C9.4817 10.2739 9.57751 10.1479 9.62953 10.0022L10.3894 7.875H10.5C10.7984 7.875 11.0845 7.75647 11.2955 7.5455C11.5065 7.33452 11.625 7.04837 11.625 6.75V5.25C11.625 4.96783 11.519 4.69595 11.328 4.48827C11.137 4.28058 10.8749 4.15226 10.5938 4.12875ZM7.125 3.375H5.25C5.15054 3.375 5.05516 3.33549 4.98484 3.26516C4.91451 3.19484 4.875 3.09946 4.875 3C4.875 2.90054 4.91451 2.80516 4.98484 2.73483C5.05516 2.66451 5.15054 2.625 5.25 2.625H7.125C7.22446 2.625 7.31984 2.66451 7.39017 2.73483C7.46049 2.80516 7.5 2.90054 7.5 3C7.5 3.09946 7.46049 3.19484 7.39017 3.26516C7.31984 3.33549 7.22446 3.375 7.125 3.375ZM8.4375 6C8.32625 6 8.21749 5.96701 8.12499 5.9052C8.03249 5.84339 7.96039 5.75554 7.91782 5.65276C7.87524 5.54998 7.8641 5.43688 7.88581 5.32776C7.90751 5.21865 7.96109 5.11842 8.03975 5.03975C8.11842 4.96109 8.21865 4.90751 8.32776 4.88581C8.43688 4.8641 8.54998 4.87524 8.65276 4.91782C8.75554 4.96039 8.84339 5.03249 8.9052 5.12499C8.96701 5.21749 9 5.32625 9 5.4375C9 5.58668 8.94074 5.72976 8.83525 5.83525C8.72976 5.94074 8.58668 6 8.4375 6Z"
                              fill="#667085"
                            />
                          </svg>

                          <span className="font-inter font-semibold not-italic text-xs leading-[30px] tracking-[0.5px] uppercase text-[#667085]">
                            Commission Paid
                          </span>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-1 py-1">
                        <div className="flex flex-row items-center gap-2">
                          <h6 className=" font-inter font-normal not-italic text-[32px] leading-5 text-[#212636]">
                            $240
                          </h6>
                        </div>
                      </div>

                      <div className="flex-none order-1 flex-grow-0">
                        <div className="flex flex-row items-start p-0 gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 11.25V5.25C22.5 5.05109 22.421 4.86032 22.2803 4.71967C22.1397 4.57902 21.9489 4.5 21.75 4.5H15.75C15.5511 4.5 15.3603 4.57902 15.2197 4.71967C15.079 4.86032 15 5.05109 15 5.25C15 5.44891 15.079 5.63968 15.2197 5.78033C15.3603 5.92098 15.5511 6 15.75 6H19.9397L12.75 13.1897L9.53061 9.96937C9.46096 9.89964 9.37824 9.84432 9.2872 9.80658C9.19615 9.76884 9.09855 9.74941 8.99999 9.74941C8.90143 9.74941 8.80383 9.76884 8.71278 9.80658C8.62174 9.84432 8.53902 9.89964 8.46936 9.96937L1.71936 16.7194C1.57863 16.8601 1.49957 17.051 1.49957 17.25C1.49957 17.449 1.57863 17.6399 1.71936 17.7806C1.8601 17.9214 2.05097 18.0004 2.24999 18.0004C2.44901 18.0004 2.63988 17.9214 2.78061 17.7806L8.99999 11.5603L12.2194 14.7806C12.289 14.8504 12.3717 14.9057 12.4628 14.9434C12.5538 14.9812 12.6514 15.0006 12.75 15.0006C12.8486 15.0006 12.9461 14.9812 13.0372 14.9434C13.1282 14.9057 13.211 14.8504 13.2806 14.7806L21 7.06031V11.25C21 11.4489 21.079 11.6397 21.2197 11.7803C21.3603 11.921 21.5511 12 21.75 12C21.9489 12 22.1397 11.921 22.2803 11.7803C22.421 11.6397 22.5 11.4489 22.5 11.25Z" fill="#15B79F"/>
</svg>


                          <div className="flex-none order-2 self-stretch flex-grow-0 h-[22px]">
                            <span className="font-inter font-normal not-italic text-sm tracking-[-0.01em] leading-[22px] text-[#15B79F]">
                              15%
                            </span>
                            <span className="font-inter font-normal not-italic ml-0.5 text-[#667085]">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
