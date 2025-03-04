/* eslint-disable react-hooks/exhaustive-deps */
// import { useCallback, useEffect, useState } from "react";

import useGetData from "../../Hooks/useGetData";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { modifyData } from "../../Hooks/Api";
import useGetUserData from "../../Hooks/useGetUserData";
import { AdminDataContext } from "../../Context/AdminProvider";
import { useContext } from "react";

const Testimonial = () => {
  const [testimonial, refetch] = useGetUserData("/api/testimonial");
  const { LoggedUser, isAdmin, userAcc } = useContext(AdminDataContext);
  const { name, imageSrc } = LoggedUser[0] || {};

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const testimonial = { ...data, name, imageSrc };

    try {
      const res = await modifyData("/api/testimonial", "POST", testimonial);
      if (res) {
        toast.success("Testimonial Posted Successfully");
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <>
      <div className="max-w-full min-w-[350px] mx-auto ">
        <div className="px-4 text-center md:m-6">
          <h2 className="pb-2 text-2xl font-semibold text-gray-800 md:text-4xl dark:text-gray-300">
            Testimonials
          </h2>
          <div className="flex w-32 mt-1 overflow-hidden rounded mx-auto">
            <div className="flex-1 h-2 bg-teal-200"></div>
            <div className="flex-1 h-2 bg-teal-400"></div>
            <div className="flex-1 h-2 bg-teal-300"></div>
          </div>
        </div>
        <section className="flex items-center   bg-gray-100 font-poppins dark:bg-dark ">
          <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="p-6 mb-6 bg-gray-50 dark:bg-dark">
                <h2 className="mb-6 text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
                  Ratings &amp; Reviews
                </h2>
                <div className="flex justify-start ">
                  <div className="flex items-center mb-2 space-x-2 text-3xl leading-none text-gray-600 dark:text-gray-400 ">
                    <div className="items-center font-bold ">4.0/5</div>
                    <div className="items-center">
                      <ul className="flex items-center ">
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-half"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mb-6 text-xs dark:text-gray-400">
                  16 customer reviews
                </div>
                <div className="pb-1 mb-6">
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2 text-xs text-black dark:text-gray-400">
                      <span className="mr-1">4</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-3 h-3 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </div>
                    <div className="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                      <div
                        className="h-3 bg-blue-500 dark:bg-blue-400"
                        style={{ width: "75%" }}
                      />
                    </div>
                    <div className="flex justify-end text-xs font-medium dark:text-gray-400">
                      91%{" "}
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2 text-xs text-black dark:text-gray-400">
                      <span className="mr-1">3</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-3 h-3 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </div>
                    <div className="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                      <div
                        className="h-3 bg-blue-500 dark:bg-blue-400"
                        style={{ width: "45%" }}
                      />
                    </div>
                    <div className="flex justify-end text-xs font-medium dark:text-gray-400">
                      45%{" "}
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2 text-xs text-black dark:text-gray-400">
                      <span className="mr-1">2</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-3 h-3 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </div>
                    <div className="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                      <div
                        className="h-3 bg-blue-500 dark:bg-blue-400"
                        style={{ width: "25%" }}
                      />
                    </div>
                    <div className="flex justify-end text-xs font-medium dark:text-gray-400">
                      25%{" "}
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div className="flex mr-2 text-xs text-black dark:text-gray-400">
                      <span className="mr-1">1</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-3 h-3 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </div>
                    <div className="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                      <div
                        className="h-3 bg-blue-500 dark:bg-blue-400"
                        style={{ width: "14%" }}
                      />
                    </div>
                    <div className="flex justify-end text-xs font-medium dark:text-gray-400">
                      14%{" "}
                    </div>
                  </div>
                </div>
                <div className="items-center ">
                  <a
                    href="#"
                    className="px-4 py-2 text-xs text-gray-100 bg-blue-500 hover:bg-blue-600 "
                  >
                    View all reviews
                  </a>
                </div>
              </div>
              {/* give the review */}
              <div className="p-6 mb-6 bg-white dark:bg-dark">
                <h2 className="mb-6 text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
                  Leave a comment
                </h2>
                <form action="" className="">
                  <div className="mb-6 ">
                    <input
                      type="text"
                      {...register("occupation")}
                      placeholder="your occupation"
                      required="true"
                      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                    />
                  </div>
                  <div className="mb-6 ">
                    <textarea
                      type="message"
                      {...register("review")}
                      placeholder="write a comment"
                      required="true"
                      className="block w-full px-4 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                      defaultValue={""}
                    />
                  </div>
                  <div className="">
                    <button
                      onClick={handleSubmit(onSubmit)}
                      className="px-4 py-2 text-xs font-medium text-gray-100 bg-blue-500 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700"
                    >
                      Submit comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* set the review */}
            <div className="p-6 dark:bg-dark bg-gray-50">
              {testimonial?.length > 0 &&
                testimonial.map((review, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap items-center mb-4 space-x-2"
                  >
                    <div className="flex self-start flex-shrink-0 cursor-pointer">
                      <img
                        src={review?.imageSrc}
                        alt=""
                        className="object-fill w-16 h-16 rounded-full"
                      />
                    </div>
                    <div className="flex items-center justify-center space-x-2 ">
                      <div className="block">
                        <div className="w-auto px-2 pb-2 ">
                          <div className="font-medium">
                            <a
                              href="#"
                              className="text-lg font-semibold dark:text-gray-400 hover:underline"
                            >
                              <small>{review?.name}</small>
                            </a>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {review?.review}
                          </div>
                        </div>
                        <div className="flex items-center justify-start w-full text-xs">
                          <div className="flex items-center justify-center px-2 space-x-1 font-semibold text-gray-700 dark:text-gray-400">
                            <a href="#" className="hover:underline">
                              <span>Like</span>
                            </a>
                            <span className="self-center">.</span>
                            <a href="#" className="hover:underline">
                              <span>Reply</span>
                            </a>
                            <span className="self-center">.</span>
                            <span>
                              {new Date(review?.createdAt).toLocaleString(
                                "en-US",
                                { timeZone: "Asia/Dhaka" }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Testimonial;
