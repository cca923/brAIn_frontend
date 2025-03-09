export const folderSelector = (state) => state.folders;

export const fileSelector = (state) => state.files;

export const summarySelector = (state) => state.summary;

export const quizSelector = (state) => state.quiz;

export const chatSelector = (state) => state.chat;

export const isPageLoadingSelector = (state) => {
  const { folders, files, summary, quiz, chat } = state;

  const loadingStates = [
    folders?.loadingMap?.loadFolders,
    files?.loadingMap?.loadFiles,
    summary?.loadingMap?.loadSummary,
    quiz?.loadingMap?.loadQuizzes,
    quiz?.loadingMap?.submitQuiz,
    chat?.loadingMap?.loadChat,
  ];

  return loadingStates.some((loadingState) => loadingState === true);
};
