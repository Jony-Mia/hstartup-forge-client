"use client"
import { createStartup, ImageUpload } from "@/api/actionRoutes";
import { Crop, Envelope, Picture, Rocket, SquarePlus, TrashBin } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, Select, TextField, ListBox, TextArea } from "@heroui/react";
import { useRef, useState } from "react";
const ImgBBApiKey = "3400c5b9c87c9fadca80817ae1c398a6"
const ImgBBURL = "https://api.imgbb.com/1/upload"
const Page = () => {
    let [startup, setStartup] = useState({
        name: '',
        email: '',
        logo: null,
        industry: '',
        funding: '',
        description: ''
    })
    let [file, setFile] = useState(null);
    let [preview, setPreview] = useState(null);
    let imageField = useRef(null);
    let uploadImage = async (e) => {
        let files = e.target.files[0];

        const urls = URL.createObjectURL(files);
        console.log(files);
        setFile(files);
        setPreview(urls);

    };
    let changeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let files = e.target.files
        console.log(startup);

        setStartup(prev => ({
            ...prev,
            [name]: files?.[0] || value
        }));
    }

    let clearUpload = () => {
        setPreview(null)
        setFile(null)
    }
    let trigger = () => {
        imageField.current.click()
    }
    let submitStartup = async (e) => {
        e.preventDefault();
        let targeted = e.currentTarget;
        let formField = new FormData(targeted)
        formField.append("image",file)
        let form = Object.fromEntries(formField.entries());
        // let image = formField.get("image")
       let url =  await ImageUpload(formField);
       let startup_data = await createStartup([form,url])
    //    console.log(startup_data);       
    //    console.log(url);       
    //     console.log(form);
    }
    return (
        <div className="h-full max-h-[120vh] p-6 mb-12">
            <div className="bg-default/50 p-5 rounded-2xl h-screen">
                <h1 className="text-2xl font-bold">Launch Your Innovation</h1>
                <h3>Provide the foundational details for your startup to begin attracting partners and Investment </h3> <br />
                <form onSubmit={submitStartup} >
                    <div className="flex gap-3 w-full">
                        <TextField type="text" className={"w-full"}>
                            <Label className="font-semibold">Startup Name</Label>
                            <Input className={"p-3 h-auto"} placeholder="e.g. Nexus Energy" name="name" onChange={changeInput} />
                        </TextField>
                        <TextField type="email" className={"w-full"} >
                            <Label className="font-semibold">Founder Email</Label>
                            <Input name="email" placeholder="Enter Your Business Email" onChange={changeInput} className={"p-3 h-auto"} />
                        </TextField>
                    </div>
                    <br />
                    <Label className="font-semibold">
                        Upload Logo
                    </Label>
                    <>
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
                                <div onClick={trigger} className="bg-white flex flex-col justify-center items-center h-60 rounded-2xl">
                                    <Picture className="text-center block size-10" />
                                    <br />
                                    <Input
                                        name="image"
                                        onChange={uploadImage}
                                        ref={imageField}
                                        type="file"
                                        accept="image/png image/jpg image/svg"
                                        className={"hidden"}
                                    />
                                    <p>Click to upload logo</p>
                                    <p>PNG, jpg and svg prefered (MAX 5MB)</p>
                                </div>
                        }
                    </>
                    <br />
                    <div className="flex gap-5 w-full">
                        {/*
                         <Select name="industry" className={"w-full"} >
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
                        */}

                        <TextField className="w-full">
                            <Label className="font-semibold">Industry</Label>
                            <Input onChange={changeInput} placeholder="Enter idustry name" name="industry" className={"p-3 h-auto w-full"} />
                        </TextField>

                        <TextField className="w-full">
                            <Label className="font-semibold">Funding Stage</Label>
                            <Input onChange={changeInput} name="funding" placeholder="Startup funding stage" className={"p-3 h-auto w-full"} />
                        </TextField>
                        {/* <Select className={"w-full"} name="funding" onChange={handleSelect} defaultValue={startup.funding} >
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
                        </Select> */}
                    </div>
                    <br />
                    <div>
                        <Label className="font-semibold" htmlFor="descriptoin">Description</Label>
                        <TextArea
                            onChange={changeInput}
                            rows={5}
                            id="descriptoin"
                            className={"w-full h-full"}
                            placeholder="Write out the full public notes.."
                            name="description"
                        />
                    </div>
                    <br />
                    <Button type="submit">Submit</Button>
                    <Modal>
                        <Button variant="primary">Create Startup</Button>
                        <Modal.Backdrop>
                            <Modal.Container>
                                <Modal.Dialog className="sm:max-w-[360px]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <Modal.Icon className="bg-default text-foreground">
                                            <Rocket className="size-5" />
                                        </Modal.Icon>
                                        <Modal.Heading>Confirm</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>
                                            Are you sure to create a starup?
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className="w-full" variant="danger" slot="close">
                                            Cancel
                                        </Button>
                                        <Button className="w-full" >
                                            Confirm
                                        </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </Modal.Container>
                        </Modal.Backdrop>
                    </Modal>
                </form>
            </div>
            <br />
            <br />
        </div>
    );
};

export default Page;
