import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Content = (props) => {
    const { show } = props;
    return (
        <div>
            <h1>{show.name}</h1>
            <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={show.image.medium} />
        </div>
    );
};

const Post = (props) => (
    <Layout>
        <Content show={props.show} />
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
}

export default Post;