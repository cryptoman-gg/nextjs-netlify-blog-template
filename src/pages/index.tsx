import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            東大卒億り人タクちゃんの仮想通貨投資ブログ<span className="fancy">.</span>
          </h1>
          <span className="handle">@takutyan_ut</span>
          <h2>仮想通貨を中心に投資・お得情報を発信していきます！！</h2>
          <SocialList />
          <div>
            <a className="twitter-timeline" data-width="300" data-height="500" data-theme="dark" href="https://twitter.com/takutyan_ut?ref_src=twsrc%5Etfw">Tweets by takutyan_ut</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></div>
            <a href="https://h.accesstrade.net/sp/cc?rk=0100o4jh00lj0h" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="https://h.accesstrade.net/sp/rr?rk=0100o4jh00lj0h" alt="コインチェック" border="0" /></a>
            <a href="https://px.a8.net/svt/ejp?a8mat=3H5XC6+F2ZCHE+3250+6FHC1" rel="nofollow">
<img border="0" width="468" height="60" alt="" src="https://www24.a8.net/svt/bgt?aid=210228486912&wid=001&eno=01&mid=s00000014274001080000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=3H5XC6+F2ZCHE+3250+6FHC1" alt="">
          </div>
         </div>
       
      <style jsx>{`
        .container {
          overflow : scroll;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          z-index: 1000;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }
        @media (min-width: 4000px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
