"use client"

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Tree, TreeNode } from "react-organizational-chart"

import DataDownload from "./DataDownload";

import FullScreenIcon from "../icons/FullScreenIcon";

const TreeList = ({ name, list }) => {
    return (
        <TreeNode label={name}>
            {list && list.length > 0 ? list.map((child) =>
                <TreeItem key={child.id} name={child.name} data={[child]} />
            ) : null}
        </TreeNode>
    )
}

const TreeItem = ({ name, data }) => {
    return (
        <TreeNode
            label={<div className='tree-node'>{name}</div>
            }
        >
            {data && data[0].children ? <TreeList list={data[0].children} /> : null}
        </TreeNode>
    )
}

export default function TaxonomyOrderTree({ treeContent }) {

    const handleFullScreen = useFullScreenHandle();
    
    return (
        <div className="flex-container py-4 px-3 overflow-auto rounded-md relative">

            <div className="sticky top-0 left-0 z-10">
                <div className="flex gap-2">
                    <button
                        onClick={handleFullScreen.enter}
                        className="border rounded-md px-2 py-1"
                        title="Full screen"
                    >
                        <FullScreenIcon w={"18"} height={"18"} />
                    </button>

                    <DataDownload title={treeContent.title} />

                </div>
            </div>

            <FullScreen handle={handleFullScreen}>
                <Tree
                    lineWidth={'2px'}
                    lineColor={'#00BFA5'}
                    lineBorderRadius={'10px'}
                    label={<div className='tree-parent-node'>{treeContent.title}</div>}
                >
                    <TreeList list={treeContent.children} />
                </Tree>
            </FullScreen>
        </div>
    )
}
