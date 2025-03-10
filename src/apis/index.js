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

export const fetchFiles = ({ folderId }) =>
  fetchApiRequest({ endpoint: `api/files/${folderId}` });

export const postUploadFile = ({ folderId, file, ...rest }) =>
  postApiFormDataRequest({
    endpoint: "api/files",
    data: { folderId, file },
    ...rest,
  });

export const deleteRemoveFile = ({ fileId }) =>
  deleteApiRequest({ endpoint: `api/files/${fileId}` });

export const fetchSummary = ({ folderId }) =>
  fetchApiRequest({ endpoint: `api/summarization/${folderId}` });
