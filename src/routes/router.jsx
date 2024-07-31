import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ChatPage } from "../pages/ChatPage";
import { GroupPage } from "../pages/GroupPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat/:id" element={<ChatPage />} />
      <Route path="/grupo/:id" element={<GroupPage />} />
    </Routes>
  );
};
