import {
  fetchApiRequest,
  postApiJsonRequest,
  postApiFormDataRequest,
  deleteApiRequest,
} from "../utils/api";

export const fetchFolders = () => fetchApiRequest({ endpoint: "api/folders" });

export const postAddFolder = ({ name }) =>
  postApiJsonRequest({ endpoint: "api/folders", data: { name } });

export const deleteRemoveFolder = ({ folderId }) =>
  deleteApiRequest({ endpoint: `api/folders/${folderId}` });

export const fetchFiles = () => fetchApiRequest({ endpoint: "api/files" });

export const postUploadFile = () =>
  postApiFormDataRequest({ endpoint: "api/files" });

export const postRemoveFile = () => deleteApiRequest({ endpoint: "api/files" });

export const fetchSummary = ({ folderId }) =>
  fetchApiRequest({ endpoint: `api/summarization/${folderId}` });
