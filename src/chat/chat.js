import { io } from "socket.io-client";

import { ENVIRONMENT } from "../config/config";

export const socket = io(ENVIRONMENT);
