import { Button, Layout } from "antd";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/features/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { Outlet } from "react-router-dom";
const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout style={{ height: "100%" }}>
      {/* sidebar */}
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
