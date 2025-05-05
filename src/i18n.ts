import i18next from "i18next";
import PhraseInContextEditorPostProcessor from "i18next-phrase-in-context-editor-post-processor";
import { ref } from "vue";

export const i18nextInstance = i18next.createInstance({
  lng: localStorage.getItem('App::language') || 'en-US',
  fallbackLng: 'en-US',
  interpolation: {
    prefix: '%{',
    suffix: '}',
  },
  postProcess: ['phraseInContextEditor']
});

export const initializeDemoI18next = async () => {
  await initializeI18next({
    projectId: "00000000000000004158e0858d2fa45c",
    accountId: "0bed59e5",
  });
};

export const initializePrivateI18next = async () => {
  await initializeI18next({
    projectId: "aade46a6581311e26d892ef5a11df0a9",
    accountId: "57a99e89e4ee5de2594afa2ab6cdc4c7",
  });
};

const initializeI18next = async (settings: { projectId: string; accountId: string }) => {
  i18nextInstance
    .use({
      type: "backend",
      read(language: string, namespace: string, callback: (errorValue: unknown, translations: unknown) => void) {
        // Path has to be relative to create chunks
        import(`./locales/${language}.json`)
          .then((resources) => callback(null, resources))
          .catch((error) => callback(error, null));
      },
    })
    .use(
      new PhraseInContextEditorPostProcessor({
        phraseEnabled: true,
        projectId: settings.projectId,
        accountId: settings.accountId,
        useOldICE: false,
      })
    );
  await i18nextInstance.init();
};

export const useTranslate = () => {
  return {t:ref(i18nextInstance.t.bind(i18nextInstance))}
}
