// react
import { Routes, Route } from "react-router";
// providers
import { ProfileGuard } from "./providers/protectedRoutes/ProfileGuard";
// layouts
import { HeaderLayout } from "@/app/layouts/HeaderLayout";
// poges
import { HomePage } from "@/pages/HomePage";
import { ProfilePage } from "@/pages/ProfilePage";
import { AboutUsPage } from "@/pages/AboutUsPage";
// constants
import {
  getHomeRoute,
  getAboutRoute,
  getProfileRoute,
} from "@/shared/libs/constants/routes";
// styles
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path={getHomeRoute()} element={<HomePage />} />
          <Route path={getAboutRoute()} element={<AboutUsPage />} />
          <Route element={<ProfileGuard />}>
            <Route path={getProfileRoute()} element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
