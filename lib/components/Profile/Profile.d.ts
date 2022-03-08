import * as React from 'react';
import { Avatar } from '@dcl/schemas';
import './Profile.css';
export declare type ProfileProps = {
    address: string;
    avatar?: Avatar | null;
    textOnly?: boolean;
    imageOnly?: boolean;
    hasPopup?: boolean;
    inline?: boolean;
    size?: 'normal' | 'large' | 'huge' | 'massive';
    isDecentraland?: boolean;
};
export declare class Profile extends React.PureComponent<ProfileProps> {
    static defaultProps: {
        inline: boolean;
        size: string;
    };
    render(): React.ReactNode;
}
