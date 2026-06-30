"use client"
import { Crop, Envelope, Picture, Rocket, SquarePlus, TrashBin } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, Select, TextField, ListBox } from "@heroui/react";
import { useRef, useState } from "react";

const Page = () => {
    let [file, setFile] = useState(null);
    let [preview, setPreview] = useState(null);
    let imageField = useRef(null);
    let uploadImage = (e) => {
        let file = e.target.files[0];
        console.log(file);
        setFile(file);
        const urls = URL.createObjectURL(file);
        console.log(file);

        setPreview(urls)
    }
    let clearUpload = () => {
        setPreview(null)
        setFile(null)
    }
    let trigger = () => {
        imageField.current.click()
    }
    return (
        <div className="h-[80vh] flex-col flex items-center justify-center ">
            <div>
                <h1 className="text-2xl font-bold">Launch Your Innovation</h1>
                <h3>Provide the foundational details for your startup to begin attracting partners and Investment </h3> <br />
                <form action="" >
                    <TextField type="text">
                        <Label className="font-semibold">Startup Name</Label>
                        <Input placeholder="e.g. Nexus Energy" />
                    </TextField>
                    <br />
                    <TextField type="email">
                        <Label className="font-semibold">Founder Email</Label>
                        <Input placeholder="e.g. Nexus Energy" />
                    </TextField>
                    <br />
                    <Label className="font-semibold">
                        Upload Logo
                    </Label>
                    {
                        file ?
                            <div className="bg-gray-100 p-4 flex flex-col justify-center items-center h-60 rounded-2xl">
                                <div className="flex gap-3 flex-wrap md:flex-wrap lg:flex-nowrap  relative border-red-200 border bg-white py-10 px-3 rounded-2xl">
                                    <div>
                                        <img width={"80"} alt="uploaded logo" src={preview} />
                                    </div>
                                    <div>
                                        <p> {file.name}</p>
                                        <p> {file.size / 1024 * 1024}</p>
                                        <Button onClick={clearUpload} variant="outline" className={"top-2 text-red-600 right-2 absolute"}>
                                            <TrashBin />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div onClick={trigger} className="bg-gray-100 flex flex-col justify-center items-center h-60 rounded-2xl">
                                <Picture className="text-center block size-10" />
                                <br />
                                <Input onChange={uploadImage} ref={imageField} type="file" className={"hidden"} />
                                <p>Click to upload logo</p>
                                <p>PNG, jpeg, jpg and svg prefered (MAX 5MB)</p>
                            </div>
                    }
                    <br />
                    <div className="flex gap-5 w-full">
                        <Select className={"w-full"}>
                            <Label className="font-semibold">Select Industry</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id={"tech"} textValue="tech" >Tech</ListBox.Item>
                                    <ListBox.Item id={"fintech"} textValue="fintech" >Fintech</ListBox.Item>
                                    <ListBox.Item id={"health-tech"} textValue="health-tech" >Health Tech</ListBox.Item>
                                    <ListBox.Item id={"clean-tech"} textValue="clean-tech" >Clean tech</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                        <Select className={"w-full"}>
                            <Label className="font-semibold">Funding Stage</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id={"tech"} textValue="tech" >Tech</ListBox.Item>
                                    <ListBox.Item id={"fintech"} textValue="fintech" >Fintech</ListBox.Item>
                                    <ListBox.Item id={"health-tech"} textValue="health-tech" >Health Tech</ListBox.Item>
                                    <ListBox.Item id={"clean-tech"} textValue="clean-tech" >Clean tech</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                    <br />

                </form>
            </div>
        </div>
    );
};

export default Page;
