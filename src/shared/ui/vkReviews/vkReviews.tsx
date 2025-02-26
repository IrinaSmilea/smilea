"use client";

import {useEffect} from "react";

export const VkReviews = () => {
    useEffect(() => {
        const VK = require("vk-openapi");

        VK.init({apiId: 7800232, onlyWidgets: true});
        VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});
    }, []);

    return (
        <>
            <div id="vk_comments"></div>
        </>
    );
};
