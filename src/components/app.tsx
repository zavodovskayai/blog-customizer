import { useState } from 'react';
import clsx from 'clsx';

import { Article } from './article/Article';
import { ArticleParamsForm } from './article-params-form/ArticleParamsForm';
import { defaultArticleState, ArticleStateType } from '../constants/articleProps';

import '../styles/index.scss';
import styles from '../styles/index.module.scss';

export const App = () => {
    const [articleState, setArticleState] = useState<ArticleStateType>(
        defaultArticleState
    );

    return (
        <main
            className={clsx(styles.main)}
            style={
                {
                    '--font-family': articleState.fontFamilyOption.value,
                    '--font-size': articleState.fontSizeOption.value,
                    '--font-color': articleState.fontColor.value,
                    '--container-width': articleState.contentWidth.value,
                    '--bg-color': articleState.backgroundColor.value,
                } as React.CSSProperties
            }>
            <ArticleParamsForm onApply={setArticleState} />
            <Article />
        </main>
    );
};
