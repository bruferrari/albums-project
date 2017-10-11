import React from 'react';
import { Text } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
