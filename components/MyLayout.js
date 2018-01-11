import Header from './Header';

const layoutStyle = {
    padding: 20,
    margin: 20,
    border: '1px solid #ddd'
};

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
    </div>
);

export default Layout;