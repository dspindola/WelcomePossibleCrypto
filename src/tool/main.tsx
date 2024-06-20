import { createRoot } from "react-dom/client";
import Tool from "./tool";
import React from "react";
import Loading from "../../components/loading";

createRoot(document.getElementById("root") as Element).render(
	<React.Suspense fallback={<Loading />}>
		<Tool />
	</React.Suspense>,
);
