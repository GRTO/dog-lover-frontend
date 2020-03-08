import * as React from "react";
import * as ReactDOM from "react-dom";

import { DogLover } from "./app/components/DogLover";

ReactDOM.render(
    <DogLover firstMember="Mayra" secondMember="Gerson" />,
    document.getElementById("content")
);