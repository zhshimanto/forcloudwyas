"use client";
import React from "react";
import ProjectSidebar from "@/components/shared/sidebars/ProjectSidebar";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const WebdesignDetails = () => {
  return (
    <div className="service__details sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="service__details__bottom__border">
          <div className="row">
            <div className="col-xl-8 col-xl-8 col-lg-8 col-md-8 col-12">
              <div className="project__details__wraper">
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
                  <div className="service__details__planning__heading">
                    <h6>Implementation Planning:</h6>
                  </div>
                  <div className="service__details__planning__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Odio facilisis mauris sit amet massa vitae tortor
                      condimentum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Odio facilisis mauris sit amet massa vitae tortor
                      condimentum.
                    </p>
                  </div>
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
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 cl-md-12 col-12">
              <div className="service__details__sidebar">
                <div
                  className="project__details__get__quote"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="project__details__sidebar__heading get__quote__heading">
                    <h6>Get a Quote:</h6>
                  </div>
                  <div className="project__details__get__quote__input">
                    <input
                      className="sidebar__common__input"
                      type="text"
                      placeholder="Name:"
                    />
                    <input
                      className="sidebar__common__input"
                      type="text"
                      placeholder="Email:"
                    />
                    <input
                      className="sidebar__common__input"
                      type="text"
                      placeholder="phone:"
                    />
                    <textarea
                      className="sidebar__common__input"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      defaultValue={"Notes:"}
                    />
                  </div>
                  <div className="project__details__get__quote__button">
                    <button type="submit" className="default__button">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
                <div
                  className="service__details__sidebar__info"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div class="sidebar__title">
                    <h5>All Services:</h5>
                  </div>
                  <div class="sidebar__list">
                    <ul>
                      <li>
                        <a class="sidebar__common__input " href="services/seo">
                          Search Engine Optimization
                          <i class="icofont-rounded-right"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="sidebar__common__input "
                          href="services/web-design"
                        >
                          Website Design
                          <i class="icofont-rounded-right"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="sidebar__common__input "
                          href="services/marketing"
                        >
                          Performance Marketing
                          <i class="icofont-rounded-right"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="sidebar__common__input "
                          href="services/data-analytics"
                        >
                          Data Analytics
                          <i class="icofont-rounded-right"></i>
                        </a>
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

export default WebdesignDetails;
