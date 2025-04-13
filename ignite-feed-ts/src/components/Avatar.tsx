import styles from './Avatar.module.css'

//  Desestruturação no JavaScript:
//  const user = { name: "Diego"};
//  const { name } = user;

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    );
}