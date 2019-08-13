import { default as React } from 'react';
import en from '../i18n/en.js';
import es from '../i18n/es.js';
import zh from '../i18n/zh.js';
import ja from '../i18n/ja.js';
import id from '../i18n/id.js';

const languages = {
    en,
    es,
    zh,
    ja,
    id
};

export default function translate(key) {
    return Component => {
        class TranslationComponent extends React.Component {
            render() {
                if (typeof window !== 'undefined') {
                    var defaultStrings = languages['en'][key];
                    var strings = languages[localStorage.getItem('isLanguage')][key];
                    return <Component {...this.props} {...this.state} strings={strings} />;
                } else {
                    return <Component {...this.props} {...this.state} strings={defaultStrings} />
                }
            }
        }

        return TranslationComponent;
    };
}