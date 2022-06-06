import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const BottomFooter = () => {
  return (
    <BottomFooterContainer>
      <div className="bottom__footer__mainlinks">
        <ul>
          <li>
            <Link to={"/"}>
              <h4>AbeBooks</h4>
              <p>
                Books, art <br />
                &apm; collectibles
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Amazon Web Services</h4>
              <p>
                Scalable Cloud
                <br />
                Computing Services
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Audible</h4>
              <p>
                Download
                <br />
                Audio Books
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>DPReview</h4>
              <p>
                Digital
                <br />
                &amp;Photography
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>IMDB</h4>
              <p>
                Movies, TV
                <br />
                &amp; Celebrities
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Shopbop</h4>
              <p>
                Designer
                <br />
                Fashion Brands
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Amazon Business</h4>
              <p>
                Everything For
                <br />
                Your Business
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Prime Now</h4>
              <p>
                2-Hour Delivery
                <br />
                on Everyday Items
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Amazon Prime Music</h4>
              <p>
                90 million songs, ad-free
                <br />
                Over 15 million podcast episodes
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom__footer__copyright ">
        <ul className="flex">
          <li>
            <Link to={"/"}>Conditions of Use &amp; Sale</Link>
          </li>
          <li>
            <Link to={"/"}>Privacy Notice</Link>
          </li>
          <li>
            <Link to={"/"}>Inertest-Based Ads</Link>
          </li>
          <li>&#169; 1996-2022,Amazon.com, Inc. or its affilites</li>
        </ul>
      </div>
    </BottomFooterContainer>
  );
};

export default BottomFooter;

const BottomFooterContainer = styled.footer`
  background-color: #131a22;
  padding: 2rem 3rem;
  .bottom__footer__mainlinks {
    ul {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-content: space-between;
      padding: 3rem;
      flex-wrap: wrap;
      gap: 2rem;

      li {
        a {
          h4 {
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--lightgray);
          }
          p {
            color: #b6b3b38d;
            font-size: 0.7rem;
          }

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .bottom__footer__copyright {
    ul {
      gap: 1rem;
      justify-content: center;
      li {
        font-size: 0.75rem;
        font-weight: 500;
        color: white;
        font-family: "Amazon-light";
        a {
          font-family: "Amazon-light";
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
