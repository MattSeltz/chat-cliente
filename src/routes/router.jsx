import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { ChatPage } from "../pages/ChatPage";
import { GroupPage } from "../pages/GroupPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat/:id" element={<ChatPage />} />
      <Route path="/grupo/:id" element={<GroupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
