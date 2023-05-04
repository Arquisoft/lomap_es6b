import React from 'react';
import {Card, CardHeader, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {CombinedDataProvider, Image, Text} from "@inrupt/solid-ui-react";
import {VCARD} from "@inrupt/lit-generated-vocab-common";


const TextCommentCard = (props) => {
    const { comment} = props;
    const posterWebId = comment?.posterWebId;
    const parts = posterWebId?.split("/");
    const part = parts?.[2]?.split(".")[0];

    return (
        <div>
            <CombinedDataProvider datasetUrl={posterWebId} thingUrl={posterWebId}>
                <Card style={{margin: '25px', marginTop:'0px'}}>
                    <CardHeader
                        component='div' style={{paddingBottom: '10px'}}
                        avatar={
                            <Avatar style={{width: "65px",
                                height: "65px",
                                margin: 'auto',
                                marginBottom:'10px'}}
                                    alt="Friend image profile">
                                <Image property={VCARD.hasPhoto.iri.value} style={{maxHeight: '65px'}}/>
                            </Avatar>
                        }
                        title={<Typography variant="h5" style={{ fontSize: "16px"}}>
                            {comment?.text}
                        </Typography>}
                        subheader={<Typography variant="h6" color="textSecondary" style={{fontSize: "16px"}}><Text property={VCARD.fn.iri.value} /> | {part}</Typography>}
                    />
                </Card>
            </CombinedDataProvider>
        </div>
    );
};

export default TextCommentCard;