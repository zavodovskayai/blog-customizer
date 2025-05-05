import { useState} from 'react';
import { ArrowButton } from '../../ui/arrow-button';
import { Button } from '../../ui/button';
import { RadioGroup } from '../../ui/radio-group';
import { Select } from '../../ui/select';
import { Separator } from '../../ui/separator';
import {
    fontFamilyOptions,
    fontColors,
    backgroundColors,
    contentWidthArr,
    fontSizeOptions,
    defaultArticleState,
    ArticleStateType,
} from '../../constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({onApply}: {
    onApply: (state: ArticleStateType) => void;
	}) => {
    const [isOpen, setIsOpen] = useState(false);
	
    const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);

    const handleToggleSidebar = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleReset = () => {
        setFormState(defaultArticleState);
    };

    const handleApply = (event: React.FormEvent) => {
        event.preventDefault();
        onApply(formState);
        setIsOpen(false);
    };

    return (
        <>
            <ArrowButton isOpen={isOpen} onClick={handleToggleSidebar} />
            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
            <aside
                className={`${styles.container} ${
                    isOpen ? styles.container_open : ''
                }`}>
                <form className={styles.form} onSubmit={handleApply}>
                    <h2 className={styles.title}>Задайте параметры</h2>
                    <div className={styles.formGroup}>
                        <Select
                            title='Шрифт'
                            options={fontFamilyOptions}
                            selected={formState.fontFamilyOption}
                            onChange={(option) =>
                                setFormState({
                                    fontFamilyOption: option,
                                    fontColor: formState.fontColor,
                                    backgroundColor: formState.backgroundColor,
                                    contentWidth: formState.contentWidth,
                                    fontSizeOption: formState.fontSizeOption,
                                })
                            }
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <RadioGroup
                            name='fontSize'
                            title='Размер шрифта'
                            options={fontSizeOptions}
                            selected={formState.fontSizeOption}
                            onChange={(option) =>
                                setFormState({
                                    fontFamilyOption: formState.fontFamilyOption,
                                    fontColor: formState.fontColor,
                                    backgroundColor: formState.backgroundColor,
                                    contentWidth: formState.contentWidth,
                                    fontSizeOption: option,
                                })
                            }
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <Select
                            title='Цвет шрифта'
                            options={fontColors}
                            selected={formState.fontColor}
                            onChange={(option) =>
                                setFormState({
                                    fontFamilyOption: formState.fontFamilyOption,
                                    fontColor: option,
                                    backgroundColor: formState.backgroundColor,
                                    contentWidth: formState.contentWidth,
                                    fontSizeOption: formState.fontSizeOption,
                                })
                            }
                        />
                    </div>
                    <Separator />
                    <div className={styles.formGroup}>
                        <Select
                            title='Цвет фона'
                            options={backgroundColors}
                            selected={formState.backgroundColor}
                            onChange={(option) =>
                                setFormState({
                                    fontFamilyOption: formState.fontFamilyOption,
                                    fontColor: formState.fontColor,
                                    backgroundColor: option,
                                    contentWidth: formState.contentWidth,
                                    fontSizeOption: formState.fontSizeOption,
                                })
                            }
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <Select
                            title='Ширина контента'
                            options={contentWidthArr}
                            selected={formState.contentWidth}
                            onChange={(option) =>
                                setFormState({
                                    fontFamilyOption: formState.fontFamilyOption,
                                    fontColor: formState.fontColor,
                                    backgroundColor: formState.backgroundColor,
                                    contentWidth: option,
                                    fontSizeOption: formState.fontSizeOption,
                                })
                            }
                        />
                    </div>
                    <div className={styles.bottomContainer}>
                        <Button
                            title='Сбросить'
                            htmlType='reset'
                            type='clear'
                            onClick={handleReset}
                        />
                        <Button title='Применить' htmlType='submit' type='apply' />
                    </div>
                </form>
            </aside>
        </>
    );
};
