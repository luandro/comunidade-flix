import FeedItem from './FeedItem'

export default ({ items }) => <main>
  {items.map(i => <FeedItem key={i._id} {...i} />)}
  <style jsx>{`
    main {

    }
    // .button {
    //   position: fixed;
    //   right: 5%;
    //   bottom: 5%;
    //   width: 50px;
    //   height: 50px;
    //   border: 1px solid black;
    //   border-radius: 50%;
    //   margin: 0 auto;
    //   text-align: center;
    //   background: white;
    // }
    @media screen and (min-width: 720px) {
      main {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
      }
    }
  `}</style>
</main>