'use client';

import { useMemo, useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  border: 1px solid #d7e0d7;
  border-radius: 10px;
  background: #fbfdfb;
  padding: 0.7rem;
`;

const Group = styled.div`
  border: 1px solid #d8e2d8;
  border-radius: 10px;
  background: #ffffff;
  padding: 0.6rem;
  margin-bottom: 0.55rem;
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.45rem;
`;

const GroupTitle = styled.h5`
  margin: 0;
  color: #1d5030;
  font-size: 0.76rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 0.55rem;
  align-items: start;
  margin-bottom: 0.5rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  color: #506050;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding-top: 0.45rem;
`;

const Input = styled.input`
  width: 100%;
  min-height: 34px;
  border: 1px solid #c9d5c9;
  border-radius: 8px;
  padding: 0 0.6rem;
  font-size: 0.78rem;
  color: #293229;
  background: #fff;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 90px;
  border: 1px solid #c9d5c9;
  border-radius: 8px;
  padding: 0.55rem 0.6rem;
  font-size: 0.77rem;
  line-height: 1.45;
  color: #293229;
  resize: vertical;
`;

const Toggle = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #17683c;
`;

const TinyButton = styled.button`
  border: 1px solid #cfd9cf;
  background: #fff;
  color: #24452e;
  border-radius: 999px;
  min-height: 28px;
  padding: 0 0.58rem;
  font-size: 0.64rem;
  font-weight: 700;
  cursor: pointer;
`;

const DangerButton = styled(TinyButton)`
  border-color: #d7b7b7;
  color: #8d2f2f;
`;

const AddRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px auto;
  gap: 0.45rem;
  margin-top: 0.35rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Select = styled.select`
  width: 100%;
  min-height: 34px;
  border: 1px solid #c9d5c9;
  border-radius: 8px;
  padding: 0 0.55rem;
  font-size: 0.76rem;
  color: #293229;
  background: #fff;
`;

const ArrayItemCard = styled.div`
  border: 1px solid #d9e1d9;
  border-radius: 8px;
  background: #fff;
  padding: 0.55rem;
  margin-bottom: 0.45rem;
`;

const Hint = styled.p`
  margin: 0;
  color: #748474;
  font-size: 0.66rem;
  line-height: 1.35;
`;

const UploadRow = styled.div`
  margin-top: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
`;

const Preview = styled.img`
  width: 70px;
  height: 48px;
  object-fit: cover;
  border: 1px solid #cad8ca;
  border-radius: 6px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 15, 0.45);
  z-index: 1300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ModalCard = styled.div`
  width: min(980px, 100%);
  max-height: calc(100vh - 2rem);
  background: #fff;
  border: 1px solid #cad6ca;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.65rem 0.8rem;
  background: #f3f7f3;
  border-bottom: 1px solid #d8e1d8;
`;

const ModalTitle = styled.h4`
  margin: 0;
  color: #1d5030;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const ModalBody = styled.div`
  padding: 0.75rem;
  overflow: auto;
`;

const LibraryToolbar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.45rem;
  margin-bottom: 0.65rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
`;

const MediaCard = styled.div`
  border: 1px solid #d7e0d7;
  border-radius: 9px;
  background: #fff;
  padding: 0.42rem;
`;

const MediaThumb = styled.img`
  width: 100%;
  height: 94px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #d2ddd2;
`;

const MediaMeta = styled.p`
  margin: 0.35rem 0;
  color: #5d6f5d;
  font-size: 0.62rem;
  line-height: 1.3;
  word-break: break-word;
`;

function cloneDeep(value) {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

function pathToString(path) {
  return path.map((segment) => String(segment)).join('.');
}

function toLabel(keyName) {
  if (typeof keyName === 'number') {
    return `Item ${keyName + 1}`;
  }

  return String(keyName || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_\-.]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (char) => char.toUpperCase()) || 'Field';
}

function isObjectLike(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function isColorField(keyName, value) {
  if (typeof value !== 'string') return false;
  const key = String(keyName || '');
  const looksLikeColor = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value.trim())
    || /^rgb(a)?\(/i.test(value.trim())
    || /^hsl(a)?\(/i.test(value.trim());

  return /(color|colour|background|bg|border|shadow)/i.test(key) && looksLikeColor;
}

function isImageField(keyName, value) {
  if (typeof value !== 'string') return false;
  return /(image|img|src|logo|icon|banner|thumbnail|photo|hero|background)/i.test(String(keyName || ''));
}

function isLongTextField(keyName, value) {
  if (typeof value !== 'string') return false;
  return value.length > 100 || /(description|desc|text|content|message|note|subtitle|body)/i.test(String(keyName || ''));
}

function createDefaultValueByType(type) {
  switch (type) {
    case 'number':
      return 0;
    case 'boolean':
      return false;
    case 'object':
      return {};
    case 'array':
      return [];
    default:
      return '';
  }
}

function createArrayItemTemplate(templateValue) {
  if (Array.isArray(templateValue)) {
    return [];
  }

  if (isObjectLike(templateValue)) {
    const next = {};

    for (const [key, value] of Object.entries(templateValue)) {
      if (/MediaId$/i.test(key)) {
        next[key] = '';
        continue;
      }

      next[key] = createArrayItemTemplate(value);
    }

    return next;
  }

  if (typeof templateValue === 'number') return 0;
  if (typeof templateValue === 'boolean') return false;

  return '';
}

function setValueAtPath(rootValue, path, nextValue) {
  if (path.length === 0) {
    return nextValue;
  }

  const cloned = cloneDeep(rootValue);
  let cursor = cloned;

  for (let index = 0; index < path.length - 1; index += 1) {
    const key = path[index];
    const nextKey = path[index + 1];

    if (Array.isArray(cursor)) {
      if (cursor[key] === undefined || cursor[key] === null) {
        cursor[key] = typeof nextKey === 'number' ? [] : {};
      }
      cursor = cursor[key];
      continue;
    }

    if (!Object.prototype.hasOwnProperty.call(cursor, key) || cursor[key] === null || cursor[key] === undefined) {
      cursor[key] = typeof nextKey === 'number' ? [] : {};
    }

    cursor = cursor[key];
  }

  const lastKey = path[path.length - 1];
  cursor[lastKey] = nextValue;

  return cloned;
}

function removeValueAtPath(rootValue, path) {
  if (path.length === 0) {
    return rootValue;
  }

  const cloned = cloneDeep(rootValue);
  let cursor = cloned;

  for (let index = 0; index < path.length - 1; index += 1) {
    const key = path[index];
    if (cursor[key] === undefined || cursor[key] === null) {
      return cloned;
    }
    cursor = cursor[key];
  }

  const lastKey = path[path.length - 1];

  if (Array.isArray(cursor) && typeof lastKey === 'number') {
    cursor.splice(lastKey, 1);
  } else {
    delete cursor[lastKey];
  }

  return cloned;
}

function FieldNode({
  value,
  path,
  keyName,
  parentObject,
  onSetValue,
  onDelete,
  onUploadImage,
  mediaAssets,
  mediaLoading,
  onRefreshMedia,
  uploadingPath,
  disabled,
}) {
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyType, setNewKeyType] = useState('text');
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [libraryQuery, setLibraryQuery] = useState('');

  const pathLabel = pathToString(path);
  const isRoot = path.length === 0;
  const filteredMediaAssets = useMemo(() => {
    if (!Array.isArray(mediaAssets)) {
      return [];
    }

    const query = String(libraryQuery || '').trim().toLowerCase();
    if (!query) {
      return mediaAssets;
    }

    return mediaAssets.filter((item) => {
      const searchable = [
        item?.id,
        item?.fileName,
        item?.originalName,
        item?.url,
        item?.pageKey,
        item?.sectionKey,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchable.includes(query);
    });
  }, [mediaAssets, libraryQuery]);

  if (Array.isArray(value)) {
    return (
      <Group>
        <GroupHeader>
          <GroupTitle>{toLabel(keyName)} (Array)</GroupTitle>
        </GroupHeader>

        {value.length === 0 && <Hint>No items yet.</Hint>}

        {value.map((item, index) => (
          <ArrayItemCard key={`${pathLabel}.${index}`}>
            <GroupHeader>
              <GroupTitle>Item {index + 1}</GroupTitle>
              {!disabled && (
                <DangerButton type="button" onClick={() => onDelete([...path, index])}>
                  Remove Item
                </DangerButton>
              )}
            </GroupHeader>
            <FieldNode
              value={item}
              path={[...path, index]}
              keyName={index}
              parentObject={Array.isArray(value) ? value : null}
              onSetValue={onSetValue}
              onDelete={onDelete}
              onUploadImage={onUploadImage}
              mediaAssets={mediaAssets}
              mediaLoading={mediaLoading}
              onRefreshMedia={onRefreshMedia}
              uploadingPath={uploadingPath}
              disabled={disabled}
            />
          </ArrayItemCard>
        ))}

        {!disabled && (
          <TinyButton
            type="button"
            onClick={() => {
              const template = value.length > 0 ? value[0] : '';
              const nextItem = createArrayItemTemplate(template);
              onSetValue([...path, value.length], nextItem);
            }}
          >
            Add Item
          </TinyButton>
        )}
      </Group>
    );
  }

  if (isObjectLike(value)) {
    const visibleEntries = Object.entries(value).filter(([entryKey]) => !/MediaId$/i.test(entryKey));

    return (
      <Group>
        {!isRoot && (
          <GroupHeader>
            <GroupTitle>{toLabel(keyName)} (Object)</GroupTitle>
            {!disabled && <DangerButton type="button" onClick={() => onDelete(path)}>Remove</DangerButton>}
          </GroupHeader>
        )}

        {visibleEntries.map(([entryKey, entryValue]) => (
          <FieldNode
            key={`${pathLabel}.${entryKey}`}
            value={entryValue}
            path={[...path, entryKey]}
            keyName={entryKey}
            parentObject={value}
            onSetValue={onSetValue}
            onDelete={onDelete}
            onUploadImage={onUploadImage}
            mediaAssets={mediaAssets}
            mediaLoading={mediaLoading}
            onRefreshMedia={onRefreshMedia}
            uploadingPath={uploadingPath}
            disabled={disabled}
          />
        ))}

        {!disabled && (
          <AddRow>
            <Input
              type="text"
              value={newKeyName}
              placeholder="New field name"
              onChange={(event) => setNewKeyName(event.target.value)}
            />
            <Select value={newKeyType} onChange={(event) => setNewKeyType(event.target.value)}>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
              <option value="object">Object</option>
              <option value="array">Array</option>
            </Select>
            <TinyButton
              type="button"
              onClick={() => {
                const normalizedKey = String(newKeyName || '').trim();

                if (!normalizedKey || Object.prototype.hasOwnProperty.call(value, normalizedKey)) {
                  return;
                }

                onSetValue([...path, normalizedKey], createDefaultValueByType(newKeyType));
                setNewKeyName('');
              }}
            >
              Add Field
            </TinyButton>
          </AddRow>
        )}
      </Group>
    );
  }

  const label = toLabel(keyName);
  const valueType = typeof value;

  if (valueType === 'boolean') {
    return (
      <Row>
        <Label>{label}</Label>
        <div>
          <Toggle
            type="checkbox"
            checked={Boolean(value)}
            disabled={disabled}
            onChange={(event) => onSetValue(path, event.target.checked)}
          />
        </div>
      </Row>
    );
  }

  if (valueType === 'number') {
    return (
      <Row>
        <Label>{label}</Label>
        <Input
          type="number"
          value={Number.isFinite(value) ? value : 0}
          disabled={disabled}
          onChange={(event) => onSetValue(path, Number(event.target.value || 0))}
        />
      </Row>
    );
  }

  const textValue = value == null ? '' : String(value);
  const colorField = isColorField(keyName, textValue);
  const imageField = isImageField(keyName, textValue);
  const longTextField = isLongTextField(keyName, textValue);

  return (
    <Row>
      <Label>{label}</Label>
      <div>
        {colorField ? (
          <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
            <Input
              type="color"
              value={textValue.startsWith('#') ? textValue : '#1b6b3a'}
              disabled={disabled}
              onChange={(event) => onSetValue(path, event.target.value)}
              style={{ width: '52px', padding: '0.1rem', minHeight: '34px' }}
            />
            <Input
              type="text"
              value={textValue}
              disabled={disabled}
              onChange={(event) => onSetValue(path, event.target.value)}
            />
          </div>
        ) : longTextField ? (
          <Textarea
            value={textValue}
            disabled={disabled}
            onChange={(event) => onSetValue(path, event.target.value)}
          />
        ) : (
          <Input
            type="text"
            value={textValue}
            disabled={disabled}
            onChange={(event) => onSetValue(path, event.target.value)}
          />
        )}

        {imageField && (
          <>
            <UploadRow>
              {textValue ? <Preview src={textValue} alt={label} /> : null}
              <Input
                type="file"
                accept="image/*"
                disabled={disabled || !onUploadImage || uploadingPath === pathLabel}
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  event.target.value = '';

                  if (!file || !onUploadImage) {
                    return;
                  }

                  const mediaIdKey = typeof keyName === 'string' ? `${keyName}MediaId` : null;
                  const currentMediaId = mediaIdKey && isObjectLike(parentObject)
                    ? parentObject[mediaIdKey]
                    : '';

                  const uploaded = await onUploadImage(path, file, currentMediaId);
                  if (!uploaded) {
                    return;
                  }

                  if (uploaded.url) {
                    onSetValue(path, uploaded.url);
                  }

                  if (mediaIdKey && uploaded.id) {
                    onSetValue([...path.slice(0, -1), mediaIdKey], uploaded.id);
                  }
                }}
                style={{ minHeight: 'auto', padding: '0.42rem 0.55rem' }}
              />
              <TinyButton
                type="button"
                disabled={disabled}
                onClick={() => setLibraryOpen(true)}
              >
                Media Library
              </TinyButton>
              {uploadingPath === pathLabel && <Hint>Uploading...</Hint>}
            </UploadRow>
            <Hint>
              Uploading from here stores image in your backend and links it to this field.
            </Hint>

            {libraryOpen && (
              <ModalOverlay onClick={() => setLibraryOpen(false)}>
                <ModalCard onClick={(event) => event.stopPropagation()}>
                  <ModalHeader>
                    <ModalTitle>Select Image from Library</ModalTitle>
                    <DangerButton type="button" onClick={() => setLibraryOpen(false)}>
                      Close
                    </DangerButton>
                  </ModalHeader>
                  <ModalBody>
                    <LibraryToolbar>
                      <Input
                        type="text"
                        value={libraryQuery}
                        placeholder="Search media by name, section, or id"
                        onChange={(event) => setLibraryQuery(event.target.value)}
                      />
                      <TinyButton
                        type="button"
                        onClick={() => onRefreshMedia && onRefreshMedia()}
                        disabled={Boolean(mediaLoading)}
                      >
                        {mediaLoading ? 'Refreshing...' : 'Refresh'}
                      </TinyButton>
                    </LibraryToolbar>

                    {filteredMediaAssets.length === 0 ? (
                      <Hint>No media assets found for current search.</Hint>
                    ) : (
                      <MediaGrid>
                        {filteredMediaAssets.map((asset, index) => {
                          const assetUrl = String(asset?.url || '').trim();
                          const mediaIdKey = typeof keyName === 'string' ? `${keyName}MediaId` : null;

                          return (
                            <MediaCard key={String(asset?.id || `${assetUrl}-${index}`)}>
                              {assetUrl ? <MediaThumb src={assetUrl} alt={asset?.originalName || 'Media'} /> : null}
                              <MediaMeta>
                                {asset?.originalName || asset?.fileName || 'Untitled image'}
                              </MediaMeta>
                              <TinyButton
                                type="button"
                                disabled={!assetUrl}
                                onClick={() => {
                                  if (!assetUrl) {
                                    return;
                                  }

                                  onSetValue(path, assetUrl);
                                  if (mediaIdKey && asset?.id) {
                                    onSetValue([...path.slice(0, -1), mediaIdKey], String(asset.id));
                                  }
                                  setLibraryOpen(false);
                                }}
                              >
                                Use This
                              </TinyButton>
                            </MediaCard>
                          );
                        })}
                      </MediaGrid>
                    )}
                  </ModalBody>
                </ModalCard>
              </ModalOverlay>
            )}
          </>
        )}
      </div>
    </Row>
  );
}

export default function PageSectionFieldEditor({
  value,
  onChange,
  onUploadImage,
  mediaAssets = [],
  mediaLoading = false,
  onRefreshMedia,
  uploadingPath = '',
  disabled = false,
}) {
  const safeValue = useMemo(() => {
    if (isObjectLike(value)) return value;
    return {};
  }, [value]);

  const handleSetValue = (path, nextValue) => {
    onChange(setValueAtPath(safeValue, path, nextValue));
  };

  const handleDelete = (path) => {
    onChange(removeValueAtPath(safeValue, path));
  };

  return (
    <Panel>
      <FieldNode
        value={safeValue}
        path={[]}
        keyName="root"
        parentObject={null}
        onSetValue={handleSetValue}
        onDelete={handleDelete}
        onUploadImage={onUploadImage}
        mediaAssets={mediaAssets}
        mediaLoading={mediaLoading}
        onRefreshMedia={onRefreshMedia}
        uploadingPath={uploadingPath}
        disabled={disabled}
      />
    </Panel>
  );
}
