import React from 'react';
import {Card, CardContent, CardHeader, IconButton, Menu, MenuItem, Rating, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {CombinedDataProvider, Image, Text} from "@inrupt/solid-ui-react";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import {useStyles} from "tss-react/mui";

const RatingCommentCard = (props) => {
    const {rating} = props;
    const posterWebId = rating?.posterWebId;
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
                                    alt="Friend image profile"
                                    data-testid="avatarCard"
                                    >
                                <Image property={VCARD.hasPhoto.iri.value} style={{maxHeight: '65px'}}/>
                            </Avatar>
                        }
                        title={
                            <Rating
                                name="simple-controlled"
                                value={rating?.value}
                                readOnly
                            />
                        }
                        subheader={<Typography variant="h6" color="textSecondary" style={{fontSize: "16px"}}><Text property={VCARD.fn.iri.value} /> | {part}</Typography>}
                    />
                </Card>
            </CombinedDataProvider>
        </div>
    );
};

export default RatingCommentCard;