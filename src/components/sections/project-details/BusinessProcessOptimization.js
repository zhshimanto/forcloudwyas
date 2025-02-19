"use client";
import ProjectSidebar from "@/components/shared/sidebars/ProjectSidebar";
import getAllProjects from "@/libs/getAllProjects";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const BusinessProcessOptimization = () => {
  return (
    <div className="project__details sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="project__details__bottom__border__none">
          <div className="row">
            <div className="col-xl-8 col-xl-8 col-lg-8 col-md-12 col-12">
              <div className="project__details__wraper">
                <div
                  className="projects__tap__wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div
                    className="tab-content tab__content__wrapper"
                    id="myTabContent"
                  ></div>
                  <div className="row">
                    <div className="col-xl-12"></div>
                  </div>
                </div>

                <div
                  className="service__details__heading"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h4> Business Process Optimization</h4>
                </div>
                <div
                  className="service__details__text"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Odio facilisis mauris sit amet massa vitae tortor
                    condimentum. Etiam sit amet nisl purus in mollis nunc sed.
                    Quam vulputate dignissim suspendisse in est ante in. Amet
                    commodo nulla facilisi nullam vehicula. Arcu vitae elementum
                    curabitur vitae nunc. Duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat. Aenean vel elit
                    scelerisque mauris pellentesque pulvinar. Turpis egestas
                    maecenas pharetra convallis. Ac turpis egestas maecenas
                    pharetra convallis. Morbi tincidunt augue interdum velit
                    euismod. Accumsan sit amet nulla facilisi morbi tempus.
                    Scelerisque eleifend donec pretium vulputate sapien nec
                    sagittis aliquam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Odio facilisis mauris sit amet massa vitae tortor
                    condimentum. Etiam sit amet nisl purus in mollis nunc sed.
                    Quam vulputate dignissim suspendisse in est ante in. Amet
                    commodo nulla facilisi nullam vehicula. Arcu vitae elementum
                    curabitur vitae nunc. Duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat. Aenean vel elit
                    scelerisque mauris pellentesque pulvinar.
                  </p>
                </div>
                <div
                  className="project__details__challenges"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="project__details__challenges__heading">
                    <h6>Project Challenges:</h6>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Odio facilisis mauris sit amet massa vitae tortor
                    condimentum. Etiam sit amet nisl purus in mollis nunc sed.
                    Quam vulputate dignissim suspendisse in est ante in. Amet
                    commodo nulla facilisi nullam vehicula. Arcu vitae elementum
                    curabitur vitae nunc. Duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat. Aenean vel elit
                    scelerisque mauris pellentesque pulvinar.
                  </p>
                  <p className="project__details__challenges__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Odio facilisis mauris sit amet massa vitae tortor
                    condimentum. Etiam sit amet nisl purus in mollis nunc sed.
                    Quam vulputate dignissim suspendisse in est ante in. Amet
                    commodo nulla facilisi nullam vehicula. Arcu vitae elementum
                    curabitur vitae nunc. Duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 cl-md-12 col-12">
              <div className="project__details__sidebar">
                <div
                  className="project__details__sidebar__info"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="project__details__sidebar__heading">
                    <h6>Project info:</h6>
                  </div>
                  <div className="project__details__sidebar__list">
                    <ul>
                      <li>
                        <span>Date:</span>
                        <p>10 Feb, 2024</p>
                      </li>
                      <li>
                        <span>Consultant:</span>
                        <p>Ramiro Parsons</p>
                      </li>
                      <li>
                        <span>Website:</span>
                        <p>www.bastun.com</p>
                      </li>
                      <li>
                        <span>Location:</span>
                        <p> Arizona, USA.</p>
                      </li>
                      <li>
                        <span>Duration</span>
                        <p> 06 Months</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProcessOptimization;
