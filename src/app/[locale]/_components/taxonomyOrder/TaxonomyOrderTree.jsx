"use client"

import { useState, useEffect, useRef } from "react";

import { useTranslations } from "next-intl";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Tree, TreeNode } from "react-organizational-chart"

import FullScreenIcon from "@/src/app/[locale]/_components/icons/FullScreenIcon";
import ZoomInIcon from "@/src/app/[locale]/_components/icons/ZoomInIcon";
import ZoomOutIcon from "@/src/app/[locale]/_components/icons/ZoomOutIcon";
import { filterTaxonValue } from "../../_lib/helpers";

function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

const TreeList = ({ name, list }) => {
    return (
        <TreeNode label={name}>
            {list && list.length > 0 ? list.map((child) =>
                <TreeItem key={child.id} name={`${capitalizeFirstLetter(filterTaxonValue(child.type))} ${child.name}`} data={[child]} />
            ) : null}
        </TreeNode>
    )
}

const TreeItem = ({ name, data }) => {
    return (
        <TreeNode label={<div className='tree-node'>{name}</div>}>
            {data && data[0].children.length > 0 ? <TreeList list={data[0].children} /> : null}
        </TreeNode>
    )
}

export default function TaxonomyOrderTree({ treeContent }) {

    const [scale, setScale] = useState(1)
    const targetRef = useRef(null)

    const minScale = 0.5;
    const maxScale = 1.1;

    const t = useTranslations("Common")

    const handleFullScreen = useFullScreenHandle();

    useEffect(() => {
        targetRef.current = document.querySelector(".tree-container");
        if (targetRef.current) {
            targetRef.current.style.transition = "transform 0.3s ease";
        }
    }, []);

    const increaseSize = () => {
        setScale((prevScale) => Math.min(prevScale + 0.05, maxScale));
    };

    const decreaseSize = () => {
        setScale((prevScale) => Math.max(prevScale - 0.05, minScale));
    };

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.style.transform = `scale(${scale})`;
        }
    }, [scale]);

    return (
        <div className="relative">
            <div className="sticky top-0 left-0 z-10">
                <div className="flex gap-2">
                    <button
                        onClick={handleFullScreen.enter}
                        className="border rounded-md px-2 py-1 bg-white"
                        title={t("fullScreen")}
                    >
                        <FullScreenIcon w={"18"} height={"18"} />
                    </button>

                    <button
                        onClick={decreaseSize}
                        className="border rounded-md px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                        disabled={scale <= minScale}
                    >
                        <ZoomOutIcon />
                    </button>

                    <button
                        onClick={increaseSize}
                        className="border rounded-md px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                        disabled={scale >= maxScale}
                    >
                        <ZoomInIcon />
                    </button>

                </div>
            </div>

            <div className="overflow-auto">
                <FullScreen handle={handleFullScreen} className="tree-container p-20">
                    <Tree
                        lineWidth={'2px'}
                        lineColor={'#00BFA5'}
                        lineBorderRadius={'10px'}
                        label={<div className='tree-parent-node'>{capitalizeFirstLetter(filterTaxonValue(treeContent?.type))} {treeContent?.name}</div>}
                    >
                        <TreeList list={treeContent?.children} />
                    </Tree>
                </FullScreen>
            </div>
        </div>
    )
}
