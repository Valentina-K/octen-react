
import {type FC, memo} from "react";
//огортання компоненту у функцію memo запобігає повторному рендерингу компонента при ререндері
//батьківського у випадку, якщо дані компонента остаються незмінними
//хоча коипонент приймає пропс, він все одно не буде повторно рендериться, оскільки в батьківському
//компоненті функція foo огорнута у useCallback
export const UserComponent: FC<{ foo: () => void }> = memo(() => {
    console.log('user');
    return (
        <div>user</div>
    );
});

/*
export const UserComponent: FC<{ foo: () => void }> =() => {
    console.log('user');
    return (
        <div>user</div>
    );
};*/
