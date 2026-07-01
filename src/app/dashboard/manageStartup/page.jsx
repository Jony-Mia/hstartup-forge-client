import { GetStartup } from "@/api/actionRoutes";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

const page = async () => {
    let startupDataList = await GetStartup()
    return (
        <div>
            <div className="grid gap-3 grid-cols-3 w-full">
                {
                    startupDataList.map(startup => {
                        return (
                            <Card key={startup._id} className="w-full">
                                <Card.Header>
                                    <div className="flex">
                                        <div>
                                            <Image width={80} height={80} alt={startup.name} src={startup.image}/>
                                        </div>
                                        <div>
                                            <p>{startup.name}</p>
                                            <small>{startup.industry}</small>
                                        </div>
                                    </div> 
                                </Card.Header>
                                <Card.Content>
                                    <p>{startup.description}</p>
                                </Card.Content>
                                <Card.Footer>
                                    <Button>View</Button>
                                </Card.Footer>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;