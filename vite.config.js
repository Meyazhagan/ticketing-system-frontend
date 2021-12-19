import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), pluginRewriteAll()],
});
