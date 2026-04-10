'use client';

import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  FaChartLine,
  FaDatabase,
  FaPlug,
  FaRegFileAlt,
  FaShieldAlt,
  FaSlidersH,
  FaSyncAlt,
  FaTrash,
} from 'react-icons/fa';
import {
  FiCheckCircle,
  FiEdit,
  FiLogOut,
  FiPlus,
  FiSave,
  FiSearch,
  FiUser,
} from 'react-icons/fi';
import {
  createAdminResource,
  deleteAdminMedia,
  deleteAdminResource,
  getAdminActivity,
  getAdminMedia,
  getAdminIntegrations,
  getAdminOverview,
  getAdminPageContentPages,
  getAdminPageContentSection,
  getAdminProfile,
  getAdminResources,
  getAdminResourceTypes,
  getAdminSiteSettings,
  loginAdmin,
  resetAdminPageContentSection,
  updateAdminPageContentSection,
  updateAdminIntegration,
  uploadAdminMedia,
  updateAdminResource,
  updateAdminSiteSettings,
} from '@/lib/adminApi';
import PageSectionFieldEditor from '@/components/admin/PageSectionFieldEditor';

const TOKEN_STORAGE_KEY = 'ummah-travel-admin-token';
const USER_STORAGE_KEY = 'ummah-travel-admin-user';
const TEMP_AUTH_TOKEN = 'temporary-admin-session';

const sectionConfig = [
  { id: 'dashboard', label: 'Dashboard', icon: FaChartLine },
  { id: 'content', label: 'Content Manager', icon: FaDatabase },
  { id: 'pages', label: 'Page Builder', icon: FaRegFileAlt },
  { id: 'apis', label: 'API Integrations', icon: FaPlug },
  { id: 'settings', label: 'Site Settings', icon: FaSlidersH },
  { id: 'security', label: 'Security', icon: FaShieldAlt },
];

const Shell = styled.main`
  min-height: 100vh;
  background: radial-gradient(circle at 10% 0%, #edf5ef 0%, #dfe7df 50%, #d2dbd2 100%);
  color: #1f1f1f;
  padding: 1.25rem;
`;

const LoginWrap = styled.section`
  min-height: calc(100vh - 2.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginCard = styled.article`
  width: 100%;
  max-width: 460px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #d0d8d0;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
  padding: 1.4rem;
`;

const Brand = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  color: #135e35;
  letter-spacing: 0.01em;
`;

const BrandSub = styled.p`
  margin: 0.35rem 0 1.2rem;
  color: #687468;
  font-size: 0.9rem;
`;

const Field = styled.label`
  display: block;
  margin-bottom: 0.78rem;

  span {
    display: block;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #687468;
    margin-bottom: 0.28rem;
    font-weight: 700;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #c9d1c9;
  border-radius: 10px;
  min-height: 42px;
  padding: 0 0.72rem;
  font-size: 0.84rem;
  color: #2b2b2b;
  background: #fff;

  &:focus {
    outline: 2px solid #14653a;
    outline-offset: 1px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 220px;
  border: 1px solid #c9d1c9;
  border-radius: 10px;
  padding: 0.7rem;
  font-size: 0.8rem;
  font-family: 'Consolas', 'Monaco', monospace;
  color: #252525;
  resize: vertical;

  &:focus {
    outline: 2px solid #14653a;
    outline-offset: 1px;
  }
`;

const PrimaryButton = styled.button`
  border: none;
  background: #11683a;
  color: #fff;
  border-radius: 999px;
  min-height: 40px;
  padding: 0 1rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #0d542f;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const GhostButton = styled.button`
  border: 1px solid #1a683b;
  background: #fff;
  color: #1a683b;
  border-radius: 999px;
  min-height: 36px;
  padding: 0 0.85rem;
  font-size: 0.72rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
`;

const DangerButton = styled.button`
  border: 1px solid #c93c3c;
  background: #fff;
  color: #b82f2f;
  border-radius: 999px;
  min-height: 34px;
  padding: 0 0.72rem;
  font-size: 0.68rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
`;

const Notice = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.76rem;
  color: ${({ $type }) => ($type === 'error' ? '#b22f2f' : '#14653a')};
`;

const AdminLayout = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 0.95rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  background: #ffffff;
  border: 1px solid #d0d8d0;
  border-radius: 16px;
  padding: 0.95rem;
  height: fit-content;
  position: sticky;
  top: 1rem;

  @media (max-width: 980px) {
    position: static;
  }
`;

const SidebarBrand = styled.div`
  margin-bottom: 0.9rem;

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #15663a;
  }

  p {
    margin: 0.22rem 0 0;
    color: #6d786d;
    font-size: 0.75rem;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
`;

const MenuButton = styled.button`
  width: 100%;
  border: 1px solid ${({ $active }) => ($active ? '#145f35' : '#d8ddd8')};
  background: ${({ $active }) => ($active ? '#145f35' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#2f392f')};
  border-radius: 10px;
  min-height: 38px;
  padding: 0 0.7rem;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  margin-top: 0.95rem;
  width: 100%;
  border: 1px solid #c9d1c9;
  background: #f7faf7;
  color: #2f392f;
  border-radius: 10px;
  min-height: 38px;
  font-size: 0.74rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  cursor: pointer;
`;

const MainPanel = styled.section`
  background: #ffffff;
  border: 1px solid #d0d8d0;
  border-radius: 16px;
  padding: 0.95rem;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.95rem;

  h2 {
    margin: 0;
    font-size: 1.3rem;
    color: #145f35;
  }

  p {
    margin: 0.3rem 0 0;
    color: #6f7a6f;
    font-size: 0.76rem;
  }
`;

const UserBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: #edf4ee;
  border: 1px solid #cfe0d1;
  border-radius: 999px;
  padding: 0.28rem 0.64rem;
  font-size: 0.68rem;
  color: #245031;
  font-weight: 700;
`;

const Grid4 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.article`
  background: #f8faf8;
  border: 1px solid #d3ddd4;
  border-radius: 12px;
  padding: 0.75rem;

  h3 {
    margin: 0;
    font-size: 0.73rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #748274;
  }

  p {
    margin: 0.38rem 0 0;
    font-size: 1.4rem;
    color: #135e35;
    font-weight: 800;
  }
`;

const PanelCard = styled.article`
  margin-top: 0.72rem;
  background: #fdfefd;
  border: 1px solid #d6ded6;
  border-radius: 12px;
  padding: 0.72rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.6rem;

  h3 {
    margin: 0;
    color: #194f2f;
    font-size: 0.98rem;
  }
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const ActivityItem = styled.div`
  border: 1px solid #d8e1d8;
  border-radius: 10px;
  background: #fff;
  padding: 0.55rem;

  p {
    margin: 0;
    font-size: 0.72rem;
    color: #2d2d2d;
  }

  span {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.64rem;
    color: #7b887b;
  }
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
`;

const Select = styled.select`
  border: 1px solid #c8d1c8;
  border-radius: 10px;
  min-height: 36px;
  padding: 0 0.7rem;
  background: #fff;
  font-size: 0.75rem;
  color: #2b2b2b;
`;

const SearchInput = styled(Input)`
  max-width: 280px;
  min-height: 36px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 0.6rem;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

const DataTableWrap = styled.div`
  border: 1px solid #d2dcd2;
  border-radius: 10px;
  overflow: auto;
  max-height: 560px;
`;

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 640px;

  th,
  td {
    border-bottom: 1px solid #e2e8e2;
    padding: 0.5rem;
    text-align: left;
    font-size: 0.7rem;
    vertical-align: top;
  }

  th {
    position: sticky;
    top: 0;
    background: #eef5ef;
    color: #3b503f;
    z-index: 1;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const TinyButton = styled.button`
  border: 1px solid #d0d8d0;
  background: #fff;
  color: #1f3d29;
  border-radius: 999px;
  min-height: 28px;
  padding: 0 0.55rem;
  font-size: 0.62rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.24rem;
`;

const EditorCard = styled.div`
  border: 1px solid #d2dcd2;
  border-radius: 10px;
  background: #fff;
  padding: 0.6rem;
`;

const SectionTitle = styled.h4`
  margin: 0 0 0.4rem;
  color: #1f4d2f;
  font-size: 0.88rem;
`;

const EditorActions = styled.div`
  margin-top: 0.55rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const ModeSwitch = styled.div`
  margin-bottom: 0.55rem;
  display: inline-flex;
  gap: 0.35rem;
  background: #eef4ee;
  border: 1px solid #d1dbd1;
  border-radius: 999px;
  padding: 0.2rem;
`;

const ModeButton = styled.button`
  border: 1px solid ${({ $active }) => ($active ? '#145f35' : 'transparent')};
  background: ${({ $active }) => ($active ? '#145f35' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#2a3d2d')};
  border-radius: 999px;
  min-height: 30px;
  padding: 0 0.62rem;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  cursor: pointer;
`;

const IntegrationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`;

const IntegrationCard = styled.article`
  border: 1px solid #d2ddd2;
  border-radius: 12px;
  background: #fff;
  padding: 0.75rem;

  h3 {
    margin: 0;
    color: #155f36;
    font-size: 0.94rem;
  }

  p {
    margin: 0.24rem 0 0;
    color: #6e7a6e;
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;

const TagRow = styled.div`
  margin-top: 0.42rem;
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid #d3ddd3;
  background: #f7faf7;
  color: #4f5b4f;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.18rem 0.5rem;
`;

const Toggle = styled.label`
  margin-top: 0.55rem;
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  font-size: 0.7rem;
  color: #2f392f;
  font-weight: 700;

  input {
    accent-color: #16673a;
  }
`;

const SmallInput = styled(Input)`
  min-height: 34px;
  font-size: 0.72rem;
`;

const SmallTextarea = styled(Textarea)`
  min-height: 84px;
  font-size: 0.72rem;
  font-family: inherit;
`;

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

const SecurityCard = styled.article`
  border: 1px solid #d2ddd2;
  border-radius: 12px;
  background: #fff;
  padding: 0.75rem;

  h3 {
    margin: 0;
    color: #155f36;
    font-size: 0.9rem;
  }

  ul {
    margin: 0.45rem 0 0;
    padding-left: 1rem;
  }

  li {
    font-size: 0.72rem;
    color: #445344;
    margin-bottom: 0.3rem;
  }
`;

function formatCellValue(value) {
  if (value === null || value === undefined) return '-';
  if (Array.isArray(value)) return `${value.length} items`;
  if (typeof value === 'object') return 'Object';

  const text = String(value);
  if (text.length > 45) {
    return `${text.slice(0, 42)}...`;
  }

  return text;
}

function normalizeObjectContent(value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value;
  }

  return {};
}

export default function AdminPage() {
  const [token, setToken] = useState(TEMP_AUTH_TOKEN);
  const [adminUser, setAdminUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  const [notice, setNotice] = useState({ type: 'success', text: '' });
  const [loginForm, setLoginForm] = useState({ email: 'admin@ummahtravel.com', password: '' });
  const [loginLoading, setLoginLoading] = useState(false);

  const [activeSection, setActiveSection] = useState('dashboard');

  const [overview, setOverview] = useState(null);
  const [activity, setActivity] = useState([]);
  const [resourceTypes, setResourceTypes] = useState(['flights', 'hotels', 'tours', 'umrah', 'visas']);
  const [resource, setResource] = useState('flights');
  const [searchTerm, setSearchTerm] = useState('');
  const [resourceItems, setResourceItems] = useState([]);
  const [resourceLoading, setResourceLoading] = useState(false);

  const [editorMode, setEditorMode] = useState('create');
  const [editorRecordId, setEditorRecordId] = useState('');
  const [editorValue, setEditorValue] = useState('{}');
  const [editorError, setEditorError] = useState('');
  const [editorSaving, setEditorSaving] = useState(false);

  const [integrations, setIntegrations] = useState([]);
  const [siteSettingsValue, setSiteSettingsValue] = useState({});
  const [siteSettingsRawValue, setSiteSettingsRawValue] = useState('{}');
  const [settingsEditorMode, setSettingsEditorMode] = useState('fields');
  const [settingsUploadPath, setSettingsUploadPath] = useState('');
  const [settingsSaving, setSettingsSaving] = useState(false);
  const [adminMediaAssets, setAdminMediaAssets] = useState([]);
  const [adminMediaLoading, setAdminMediaLoading] = useState(false);

  const [pageSchemas, setPageSchemas] = useState([]);
  const [selectedPage, setSelectedPage] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [pageSectionMeta, setPageSectionMeta] = useState(null);
  const [pageSectionValue, setPageSectionValue] = useState({});
  const [pageSectionRawValue, setPageSectionRawValue] = useState('{}');
  const [pageEditorMode, setPageEditorMode] = useState('fields');
  const [pageUploadPath, setPageUploadPath] = useState('');
  const [pageBuilderLoading, setPageBuilderLoading] = useState(false);
  const [pageBuilderSaving, setPageBuilderSaving] = useState(false);
  const [pageBuilderError, setPageBuilderError] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedToken = window.localStorage.getItem(TOKEN_STORAGE_KEY);
    const storedUser = window.localStorage.getItem(USER_STORAGE_KEY);

    setToken(storedToken || TEMP_AUTH_TOKEN);

    if (storedUser) {
      try {
        setAdminUser(JSON.parse(storedUser));
      } catch {
        setAdminUser(null);
      }
    }

    setAuthReady(true);
  }, []);

  const tableColumns = useMemo(() => {
    if (resourceItems.length === 0) {
      return ['id'];
    }

    const first = resourceItems[0] || {};
    const dynamicKeys = Object.keys(first).filter((key) => key !== 'id').slice(0, 4);
    return ['id', ...dynamicKeys];
  }, [resourceItems]);

  const selectedPageSchema = useMemo(
    () => pageSchemas.find((page) => page.key === selectedPage) || null,
    [pageSchemas, selectedPage],
  );

  const loadPageSectionContent = async (
    authToken = token,
    pageKey = selectedPage,
    sectionKey = selectedSection,
  ) => {
    if (!authToken || !pageKey || !sectionKey) return;

    setPageBuilderLoading(true);
    setPageBuilderError('');

    try {
      const payload = await getAdminPageContentSection(authToken, pageKey, sectionKey);
      const sectionPayload = payload?.data || null;
      const nextContent = normalizeObjectContent(sectionPayload?.content);

      setPageSectionMeta(sectionPayload);
      setPageSectionValue(nextContent);
      setPageSectionRawValue(JSON.stringify(nextContent, null, 2));
    } catch (error) {
      setPageBuilderError(error.message || 'Unable to load section content.');
      setPageSectionMeta(null);
      setPageSectionValue({});
      setPageSectionRawValue('{}');
    } finally {
      setPageBuilderLoading(false);
    }
  };

  const loadAdminMediaAssets = async (authToken = token) => {
    if (!authToken) {
      return;
    }

    setAdminMediaLoading(true);

    try {
      const payload = await getAdminMedia(authToken, { limit: 400 });
      setAdminMediaAssets(Array.isArray(payload?.data) ? payload.data : []);
    } catch (error) {
      setNotice({ type: 'error', text: error.message || 'Unable to load media library.' });
    } finally {
      setAdminMediaLoading(false);
    }
  };

  const bootAdminPanel = async (authToken) => {
    const [overviewPayload, activityPayload, resourcesPayload, integrationsPayload, settingsPayload, pagesPayload, mediaPayload] = await Promise.all([
      getAdminOverview(authToken),
      getAdminActivity(authToken, 20),
      getAdminResourceTypes(authToken),
      getAdminIntegrations(authToken),
      getAdminSiteSettings(authToken),
      getAdminPageContentPages(authToken),
      getAdminMedia(authToken, { limit: 400 }),
    ]);

    const resources = resourcesPayload?.data || [];

    setOverview(overviewPayload?.data || null);
    setActivity(activityPayload?.data || []);
    setResourceTypes(resources.length > 0 ? resources : resourceTypes);

    if (resources.length > 0 && !resources.includes(resource)) {
      setResource(resources[0]);
    }

    setIntegrations(integrationsPayload?.data || []);
    setAdminMediaAssets(Array.isArray(mediaPayload?.data) ? mediaPayload.data : []);
    const nextSiteSettings = normalizeObjectContent(settingsPayload?.data);
    setSiteSettingsValue(nextSiteSettings);
    setSiteSettingsRawValue(JSON.stringify(nextSiteSettings, null, 2));

    const availablePages = Array.isArray(pagesPayload?.data) ? pagesPayload.data : [];
    setPageSchemas(availablePages);

    if (availablePages.length > 0) {
      const preferredPage = availablePages.find((page) => page.key === selectedPage) || availablePages[0];
      const firstSection = preferredPage?.sections?.[0]?.key || '';

      setSelectedPage(preferredPage.key);

      if (!selectedSection || !preferredPage?.sections?.some((section) => section.key === selectedSection)) {
        setSelectedSection(firstSection);
      }
    }
  };

  const refreshOverviewAndActivity = async (authToken = token) => {
    const [overviewPayload, activityPayload] = await Promise.all([
      getAdminOverview(authToken),
      getAdminActivity(authToken, 20),
    ]);

    setOverview(overviewPayload?.data || null);
    setActivity(activityPayload?.data || []);
  };

  const loadResources = async (authToken = token, query = searchTerm, currentResource = resource) => {
    if (!authToken || !currentResource) return;

    setResourceLoading(true);
    try {
      const payload = await getAdminResources(authToken, currentResource, query);
      setResourceItems(payload?.data || []);
    } catch (error) {
      setNotice({ type: 'error', text: error.message });
    } finally {
      setResourceLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    const initialize = async () => {
      try {
        const profilePayload = await getAdminProfile(token);
        if (cancelled) return;

        const user = profilePayload?.user || profilePayload?.data || profilePayload?.user;
        if (user) {
          setAdminUser(user);
          window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        }

        await bootAdminPanel(token);
      } catch (error) {
        if (cancelled) return;
        setNotice({ type: 'error', text: error.message || 'Unable to initialize admin workspace.' });
      }
    };

    initialize();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (activeSection !== 'content') return;
    if (!token) return;
    loadResources(token, '', resource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection, token, resource]);

  useEffect(() => {
    if (activeSection !== 'pages') return;
    if (!token || !selectedPage || !selectedSection) return;

    loadPageSectionContent(token, selectedPage, selectedSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection, token, selectedPage, selectedSection]);

  useEffect(() => {
    if (!token) return;
    if (activeSection !== 'pages' && activeSection !== 'settings') return;

    loadAdminMediaAssets(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection, token]);

  const handleLogout = (showMessage = true) => {
    setToken(TEMP_AUTH_TOKEN);
    setAdminUser(null);
    setOverview(null);
    setActivity([]);
    setResourceItems([]);
    setIntegrations([]);
    setSiteSettingsValue({});
    setSiteSettingsRawValue('{}');
    setSettingsEditorMode('fields');
    setSettingsUploadPath('');
    setAdminMediaAssets([]);
    setAdminMediaLoading(false);
    setPageSchemas([]);
    setSelectedPage('');
    setSelectedSection('');
    setPageSectionMeta(null);
    setPageSectionValue({});
    setPageSectionRawValue('{}');
    setPageEditorMode('fields');
    setPageUploadPath('');
    setPageBuilderError('');

    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(TOKEN_STORAGE_KEY);
      window.localStorage.removeItem(USER_STORAGE_KEY);
    }

    if (showMessage) {
      setNotice({ type: 'success', text: 'Logged out successfully.' });
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginLoading(true);
    setNotice({ type: 'success', text: '' });

    try {
      const payload = await loginAdmin(loginForm);
      const nextToken = payload?.token || '';
      const nextUser = payload?.user || null;

      if (!nextToken) {
        throw new Error('Login succeeded but token is missing.');
      }

      setToken(nextToken);
      setAdminUser(nextUser);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(TOKEN_STORAGE_KEY, nextToken);
        if (nextUser) {
          window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(nextUser));
        }
      }

      setLoginForm((previous) => ({ ...previous, password: '' }));
      setNotice({ type: 'success', text: 'Welcome back, admin.' });
    } catch (error) {
      setNotice({ type: 'error', text: error.message || 'Unable to login.' });
    } finally {
      setLoginLoading(false);
    }
  };

  const openCreateEditor = () => {
    setEditorMode('create');
    setEditorRecordId('');
    setEditorError('');
    setEditorValue('{\n  \n}');
  };

  const openEditEditor = (item) => {
    setEditorMode('edit');
    setEditorRecordId(String(item?.id || ''));
    setEditorError('');
    setEditorValue(JSON.stringify(item, null, 2));
  };

  const saveEditorRecord = async () => {
    if (!token) return;

    setEditorSaving(true);
    setEditorError('');

    try {
      const parsed = JSON.parse(editorValue);

      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        throw new Error('Editor payload must be a JSON object.');
      }

      if (editorMode === 'create') {
        await createAdminResource(token, resource, parsed);
        setNotice({ type: 'success', text: `${resource} record created successfully.` });
      } else {
        if (!editorRecordId) {
          throw new Error('No record selected for update.');
        }
        await updateAdminResource(token, resource, editorRecordId, parsed);
        setNotice({ type: 'success', text: `${resource} record updated successfully.` });
      }

      await Promise.all([loadResources(token, searchTerm, resource), refreshOverviewAndActivity(token)]);
    } catch (error) {
      setEditorError(error.message || 'Unable to save this record.');
    } finally {
      setEditorSaving(false);
    }
  };

  const deleteRecord = async (recordId) => {
    if (!token || !recordId) return;

    const shouldDelete = window.confirm('Delete this record permanently?');
    if (!shouldDelete) return;

    try {
      await deleteAdminResource(token, resource, recordId);
      setNotice({ type: 'success', text: `${resource} record deleted successfully.` });
      await Promise.all([loadResources(token, searchTerm, resource), refreshOverviewAndActivity(token)]);
    } catch (error) {
      setNotice({ type: 'error', text: error.message || 'Unable to delete record.' });
    }
  };

  const updateIntegrationField = (integrationId, field, value) => {
    setIntegrations((previous) =>
      previous.map((integration) =>
        integration.id === integrationId ? { ...integration, [field]: value } : integration,
      ),
    );
  };

  const saveIntegration = async (integrationId) => {
    if (!token) return;

    const integration = integrations.find((item) => item.id === integrationId);
    if (!integration) return;

    try {
      await updateAdminIntegration(token, integrationId, integration);
      setNotice({ type: 'success', text: `${integration.name} updated.` });
      await refreshOverviewAndActivity(token);
    } catch (error) {
      setNotice({ type: 'error', text: error.message || 'Unable to update integration.' });
    }
  };

  const saveSiteSettings = async () => {
    if (!token) return;

    setSettingsSaving(true);

    try {
      const parsed = settingsEditorMode === 'json'
        ? JSON.parse(siteSettingsRawValue)
        : siteSettingsValue;

      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        throw new Error('Site settings must be a JSON object.');
      }

      await updateAdminSiteSettings(token, parsed);
      setNotice({ type: 'success', text: 'Site settings saved successfully.' });
      await refreshOverviewAndActivity(token);
    } catch (error) {
      setNotice({ type: 'error', text: error.message || 'Unable to save settings.' });
    } finally {
      setSettingsSaving(false);
    }
  };

  const updateSiteSettingsValue = (nextValue) => {
    const normalized = normalizeObjectContent(nextValue);
    setSiteSettingsValue(normalized);
    setSiteSettingsRawValue(JSON.stringify(normalized, null, 2));
  };

  const handleSiteSettingsRawChange = (nextRaw) => {
    setSiteSettingsRawValue(nextRaw);

    try {
      const parsed = JSON.parse(nextRaw);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        setSiteSettingsValue(parsed);
      }
    } catch {
      // Keep raw draft editable while JSON is temporarily invalid.
    }
  };

  const uploadSiteSettingsImage = async (fieldPath, file, currentMediaId = '') => {
    if (!token || !file) {
      return null;
    }

    const normalizedPath = Array.isArray(fieldPath)
      ? fieldPath.map((segment) => String(segment)).join('.')
      : String(fieldPath || '');

    setSettingsUploadPath(normalizedPath);

    try {
      const payload = await uploadAdminMedia(token, file, {
        pageKey: 'shared',
        sectionKey: 'site-settings',
        fieldPath: normalizedPath,
      });

      const uploadedMedia = payload?.data || null;

      if (uploadedMedia?.id) {
        setAdminMediaAssets((previous) => [
          uploadedMedia,
          ...previous.filter((item) => String(item?.id) !== String(uploadedMedia.id)),
        ]);
      }

      if (currentMediaId && uploadedMedia?.id && uploadedMedia.id !== currentMediaId) {
        await deleteAdminMedia(token, currentMediaId).catch(() => null);
        setAdminMediaAssets((previous) =>
          previous.filter((item) => String(item?.id) !== String(currentMediaId)),
        );
      }

      return uploadedMedia;
    } catch (error) {
      setNotice({ type: 'error', text: error.message || 'Unable to upload settings image.' });
      return null;
    } finally {
      setSettingsUploadPath('');
    }
  };

  const savePageSectionContent = async () => {
    if (!token || !selectedPage || !selectedSection) return;

    setPageBuilderSaving(true);
    setPageBuilderError('');

    try {
      const parsed = pageEditorMode === 'json'
        ? JSON.parse(pageSectionRawValue)
        : pageSectionValue;

      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        throw new Error('Section content must be a JSON object.');
      }

      await updateAdminPageContentSection(token, selectedPage, selectedSection, parsed);
      await Promise.all([
        loadPageSectionContent(token, selectedPage, selectedSection),
        refreshOverviewAndActivity(token),
      ]);

      setNotice({ type: 'success', text: `Updated ${selectedPage}.${selectedSection} content.` });
    } catch (error) {
      setPageBuilderError(error.message || 'Unable to save section content.');
    } finally {
      setPageBuilderSaving(false);
    }
  };

  const updatePageSectionValue = (nextValue) => {
    const normalized = normalizeObjectContent(nextValue);
    setPageSectionValue(normalized);
    setPageSectionRawValue(JSON.stringify(normalized, null, 2));
  };

  const handlePageSectionRawChange = (nextRaw) => {
    setPageSectionRawValue(nextRaw);

    try {
      const parsed = JSON.parse(nextRaw);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        setPageSectionValue(parsed);
      }
    } catch {
      // Keep raw draft editable while JSON is temporarily invalid.
    }
  };

  const uploadPageSectionImage = async (fieldPath, file) => {
    if (!token || !selectedPage || !selectedSection || !file) {
      return null;
    }

    const normalizedPath = Array.isArray(fieldPath)
      ? fieldPath.map((segment) => String(segment)).join('.')
      : String(fieldPath || '');

    setPageUploadPath(normalizedPath);
    setPageBuilderError('');

    try {
      const payload = await uploadAdminMedia(token, file, {
        pageKey: selectedPage,
        sectionKey: selectedSection,
        fieldPath: normalizedPath,
      });

      const uploadedMedia = payload?.data || null;

      if (uploadedMedia?.id) {
        setAdminMediaAssets((previous) => [
          uploadedMedia,
          ...previous.filter((item) => String(item?.id) !== String(uploadedMedia.id)),
        ]);
      }

      return uploadedMedia;
    } catch (error) {
      setPageBuilderError(error.message || 'Unable to upload image.');
      return null;
    } finally {
      setPageUploadPath('');
    }
  };

  const resetPageSectionContent = async () => {
    if (!token || !selectedPage || !selectedSection) return;

    const shouldReset = window.confirm('Reset this section to default content?');
    if (!shouldReset) return;

    setPageBuilderSaving(true);
    setPageBuilderError('');

    try {
      await resetAdminPageContentSection(token, selectedPage, selectedSection);
      await Promise.all([
        loadPageSectionContent(token, selectedPage, selectedSection),
        refreshOverviewAndActivity(token),
      ]);

      setNotice({ type: 'success', text: `Reset ${selectedPage}.${selectedSection} to defaults.` });
    } catch (error) {
      setPageBuilderError(error.message || 'Unable to reset section content.');
    } finally {
      setPageBuilderSaving(false);
    }
  };

  const resourceMetrics = overview?.resources || {};

  if (!authReady) {
    return (
      <Shell>
        <LoginWrap>
          <LoginCard>
            <Brand>Admin Console</Brand>
            <BrandSub>Loading secure workspace...</BrandSub>
          </LoginCard>
        </LoginWrap>
      </Shell>
    );
  }

  if (!token) {
    return (
      <Shell>
        <LoginWrap>
          <LoginCard>
            <Brand>Ummah Travel Admin</Brand>
            <BrandSub>Professional operations panel for full project control.</BrandSub>

            <form onSubmit={handleLogin}>
              <Field>
                <span>Admin Email</span>
                <Input
                  type="email"
                  value={loginForm.email}
                  onChange={(event) =>
                    setLoginForm((previous) => ({ ...previous, email: event.target.value }))
                  }
                  required
                />
              </Field>

              <Field>
                <span>Password</span>
                <Input
                  type="password"
                  value={loginForm.password}
                  onChange={(event) =>
                    setLoginForm((previous) => ({ ...previous, password: event.target.value }))
                  }
                  placeholder="Enter admin password"
                  required
                />
              </Field>

              <PrimaryButton type="submit" disabled={loginLoading}>
                {loginLoading ? 'Signing In...' : 'Sign In to Admin'}
              </PrimaryButton>
            </form>

            {notice.text ? <Notice $type={notice.type}>{notice.text}</Notice> : null}
          </LoginCard>
        </LoginWrap>
      </Shell>
    );
  }

  return (
    <Shell>
      <AdminLayout>
        <Sidebar>
          <SidebarBrand>
            <h2>ummah admin</h2>
            <p>Operations and growth control center</p>
          </SidebarBrand>

          <Menu>
            {sectionConfig.map((section) => {
              const Icon = section.icon;
              return (
                <MenuButton
                  key={section.id}
                  type="button"
                  $active={activeSection === section.id}
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon /> {section.label}
                </MenuButton>
              );
            })}
          </Menu>

          <LogoutButton type="button" onClick={() => handleLogout()}>
            <FiLogOut /> Logout
          </LogoutButton>
        </Sidebar>

        <MainPanel>
          <Header>
            <div>
              <h2>{sectionConfig.find((section) => section.id === activeSection)?.label}</h2>
              <p>Control data, integrations, security and platform settings from one panel.</p>
            </div>
            <UserBadge>
              <FiUser /> {adminUser?.name || adminUser?.email || 'Admin'}
            </UserBadge>
          </Header>

          {notice.text ? <Notice $type={notice.type}>{notice.text}</Notice> : null}

          {activeSection === 'dashboard' && (
            <>
              <Grid4>
                <StatCard>
                  <h3>Flights</h3>
                  <p>{resourceMetrics.flights || 0}</p>
                </StatCard>
                <StatCard>
                  <h3>Hotels</h3>
                  <p>{resourceMetrics.hotels || 0}</p>
                </StatCard>
                <StatCard>
                  <h3>Tours</h3>
                  <p>{resourceMetrics.tours || 0}</p>
                </StatCard>
                <StatCard>
                  <h3>Umrah Packages</h3>
                  <p>{resourceMetrics.umrah || 0}</p>
                </StatCard>
              </Grid4>

              <Grid4 style={{ marginTop: '0.6rem' }}>
                <StatCard>
                  <h3>Visa Records</h3>
                  <p>{resourceMetrics.visas || 0}</p>
                </StatCard>
                <StatCard>
                  <h3>APIs Purchased</h3>
                  <p>{overview?.integrations?.purchased || 0}</p>
                </StatCard>
                <StatCard>
                  <h3>APIs Pending</h3>
                  <p>{overview?.integrations?.pending || 0}</p>
                </StatCard>
                <StatCard>
                  <h3>Last Refresh</h3>
                  <p style={{ fontSize: '0.9rem' }}>
                    {overview?.generatedAt ? new Date(overview.generatedAt).toLocaleString() : '-'}
                  </p>
                </StatCard>
              </Grid4>

              <PanelCard>
                <CardHeader>
                  <h3>Recent Admin Activity</h3>
                  <GhostButton type="button" onClick={() => refreshOverviewAndActivity()}>
                    <FaSyncAlt /> Refresh
                  </GhostButton>
                </CardHeader>

                <ActivityList>
                  {activity.length === 0 && <ActivityItem><p>No activity recorded yet.</p></ActivityItem>}
                  {activity.map((item) => (
                    <ActivityItem key={item.id}>
                      <p>
                        <strong>{item.actor?.name || 'Admin'}</strong> {item.action} {item.resource}: {item.details}
                      </p>
                      <span>{new Date(item.createdAt).toLocaleString()}</span>
                    </ActivityItem>
                  ))}
                </ActivityList>
              </PanelCard>
            </>
          )}

          {activeSection === 'content' && (
            <>
              <Toolbar>
                <Select value={resource} onChange={(event) => setResource(event.target.value)}>
                  {resourceTypes.map((resourceType) => (
                    <option value={resourceType} key={resourceType}>
                      {resourceType}
                    </option>
                  ))}
                </Select>

                <SearchInput
                  type="text"
                  placeholder="Search records..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />

                <GhostButton type="button" onClick={() => loadResources(token, searchTerm, resource)}>
                  <FiSearch /> Search
                </GhostButton>

                <PrimaryButton type="button" onClick={openCreateEditor}>
                  <FiPlus /> New Record
                </PrimaryButton>
              </Toolbar>

              <ContentGrid>
                <DataTableWrap>
                  <DataTable>
                    <thead>
                      <tr>
                        {tableColumns.map((column) => (
                          <th key={column}>{column}</th>
                        ))}
                        <th>actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resourceItems.map((item) => (
                        <tr key={item.id || JSON.stringify(item)}>
                          {tableColumns.map((column) => (
                            <td key={`${item.id}-${column}`}>{formatCellValue(item[column])}</td>
                          ))}
                          <td>
                            <ActionButtons>
                              <TinyButton type="button" onClick={() => openEditEditor(item)}>
                                <FiEdit /> Edit
                              </TinyButton>
                              <DangerButton type="button" onClick={() => deleteRecord(item.id)}>
                                <FaTrash /> Delete
                              </DangerButton>
                            </ActionButtons>
                          </td>
                        </tr>
                      ))}
                      {resourceItems.length === 0 && (
                        <tr>
                          <td colSpan={tableColumns.length + 1}>
                            {resourceLoading ? 'Loading records...' : 'No records found for current filter.'}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </DataTable>
                </DataTableWrap>

                <EditorCard>
                  <SectionTitle>
                    {editorMode === 'edit'
                      ? `Editing ${resource} record: ${editorRecordId || '-'}`
                      : `Create new ${resource} record`}
                  </SectionTitle>

                  <Textarea
                    value={editorValue}
                    onChange={(event) => setEditorValue(event.target.value)}
                    spellCheck={false}
                  />

                  {editorError ? <Notice $type="error">{editorError}</Notice> : null}

                  <EditorActions>
                    <PrimaryButton type="button" onClick={saveEditorRecord} disabled={editorSaving}>
                      <FiSave /> {editorSaving ? 'Saving...' : 'Save Record'}
                    </PrimaryButton>
                    <GhostButton type="button" onClick={openCreateEditor}>
                      <FiPlus /> Reset Editor
                    </GhostButton>
                  </EditorActions>
                </EditorCard>
              </ContentGrid>
            </>
          )}

          {activeSection === 'pages' && (
            <>
              <Toolbar>
                <Select
                  value={selectedPage}
                  onChange={(event) => {
                    const nextPage = event.target.value;
                    setSelectedPage(nextPage);

                    const nextPageSchema = pageSchemas.find((page) => page.key === nextPage) || null;
                    const firstSection = nextPageSchema?.sections?.[0]?.key || '';

                    setSelectedSection(firstSection);
                    setPageSectionMeta(null);
                    setPageSectionValue({});
                    setPageSectionRawValue('{}');
                    setPageBuilderError('');
                  }}
                >
                  {pageSchemas.map((page) => (
                    <option value={page.key} key={page.key}>
                      {page.label} ({page.route})
                    </option>
                  ))}
                </Select>

                <Select
                  value={selectedSection}
                  onChange={(event) => {
                    setSelectedSection(event.target.value);
                    setPageSectionMeta(null);
                    setPageSectionValue({});
                    setPageSectionRawValue('{}');
                    setPageBuilderError('');
                  }}
                  disabled={!selectedPageSchema || !Array.isArray(selectedPageSchema.sections)}
                >
                  {(selectedPageSchema?.sections || []).map((section) => (
                    <option value={section.key} key={section.key}>
                      {section.label}
                    </option>
                  ))}
                </Select>

                <GhostButton
                  type="button"
                  onClick={() => loadPageSectionContent(token, selectedPage, selectedSection)}
                  disabled={!selectedPage || !selectedSection || pageBuilderLoading}
                >
                  <FaSyncAlt /> {pageBuilderLoading ? 'Loading...' : 'Reload'}
                </GhostButton>

                <PrimaryButton
                  type="button"
                  onClick={savePageSectionContent}
                  disabled={!selectedPage || !selectedSection || pageBuilderSaving}
                >
                  <FiSave /> {pageBuilderSaving ? 'Saving...' : 'Save Section'}
                </PrimaryButton>

                <DangerButton
                  type="button"
                  onClick={resetPageSectionContent}
                  disabled={!selectedPage || !selectedSection || pageBuilderSaving}
                >
                  <FaTrash /> Reset Default
                </DangerButton>
              </Toolbar>

              <ContentGrid>
                <EditorCard>
                  <SectionTitle>
                    {selectedPage && selectedSection
                      ? `Editing ${selectedPage}.${selectedSection}`
                      : 'Select a page and section'}
                  </SectionTitle>

                  <p style={{ margin: '0 0 0.6rem', color: '#6d786d', fontSize: '0.72rem' }}>
                    {pageSectionMeta?.description || 'Section description will appear here.'}
                  </p>

                  <ModeSwitch>
                    <ModeButton
                      type="button"
                      $active={pageEditorMode === 'fields'}
                      onClick={() => setPageEditorMode('fields')}
                    >
                      Visual Fields
                    </ModeButton>
                    <ModeButton
                      type="button"
                      $active={pageEditorMode === 'json'}
                      onClick={() => setPageEditorMode('json')}
                    >
                      Raw JSON
                    </ModeButton>
                  </ModeSwitch>

                  {pageEditorMode === 'fields' ? (
                    <PageSectionFieldEditor
                      value={pageSectionValue}
                      onChange={updatePageSectionValue}
                      onUploadImage={uploadPageSectionImage}
                      uploadingPath={pageUploadPath}
                      mediaAssets={adminMediaAssets}
                      mediaLoading={adminMediaLoading}
                      onRefreshMedia={() => loadAdminMediaAssets(token)}
                      disabled={pageBuilderSaving || pageBuilderLoading}
                    />
                  ) : (
                    <Textarea
                      value={pageSectionRawValue}
                      onChange={(event) => handlePageSectionRawChange(event.target.value)}
                      spellCheck={false}
                      style={{ minHeight: '360px' }}
                    />
                  )}

                  {pageBuilderError ? <Notice $type="error">{pageBuilderError}</Notice> : null}

                  <EditorActions>
                    <PrimaryButton
                      type="button"
                      onClick={savePageSectionContent}
                      disabled={!selectedPage || !selectedSection || pageBuilderSaving}
                    >
                      <FiSave /> {pageBuilderSaving ? 'Saving...' : 'Save Section'}
                    </PrimaryButton>
                    <GhostButton
                      type="button"
                      onClick={() => loadPageSectionContent(token, selectedPage, selectedSection)}
                      disabled={!selectedPage || !selectedSection || pageBuilderLoading}
                    >
                      <FaSyncAlt /> Restore Loaded
                    </GhostButton>
                  </EditorActions>
                </EditorCard>

                <PanelCard>
                  <CardHeader>
                    <h3>Section Metadata</h3>
                  </CardHeader>
                  <ActivityList>
                    <ActivityItem>
                      <p>
                        <strong>Page:</strong> {selectedPage || '-'}
                      </p>
                    </ActivityItem>
                    <ActivityItem>
                      <p>
                        <strong>Section:</strong> {selectedSection || '-'}
                      </p>
                    </ActivityItem>
                    <ActivityItem>
                      <p>
                        <strong>Has Custom Override:</strong> {pageSectionMeta?.hasOverride ? 'Yes' : 'No'}
                      </p>
                    </ActivityItem>
                    <ActivityItem>
                      <p>
                        <strong>Last Updated:</strong>{' '}
                        {pageSectionMeta?.updatedAt ? new Date(pageSectionMeta.updatedAt).toLocaleString() : '-'}
                      </p>
                    </ActivityItem>
                    <ActivityItem>
                      <p>
                        <strong>Updated By:</strong> {pageSectionMeta?.updatedBy?.email || '-'}
                      </p>
                    </ActivityItem>
                    <ActivityItem>
                      <p>
                        <strong>Top-level Fields:</strong> {Object.keys(pageSectionValue || {}).length}
                      </p>
                    </ActivityItem>
                  </ActivityList>
                </PanelCard>
              </ContentGrid>
            </>
          )}

          {activeSection === 'apis' && (
            <IntegrationGrid>
              {integrations.map((integration) => (
                <IntegrationCard key={integration.id}>
                  <h3>{integration.name}</h3>
                  <p>{integration.purpose}</p>

                  <TagRow>
                    <Tag>{integration.category}</Tag>
                    <Tag>Priority: {integration.priority}</Tag>
                    <Tag>{integration.monthlyCost}</Tag>
                  </TagRow>

                  <Toggle>
                    <input
                      type="checkbox"
                      checked={Boolean(integration.purchased)}
                      onChange={(event) =>
                        updateIntegrationField(integration.id, 'purchased', event.target.checked)
                      }
                    />
                    Purchased / Active
                  </Toggle>

                  <Field style={{ marginTop: '0.45rem' }}>
                    <span>Environment Variable</span>
                    <SmallInput
                      value={integration.environmentVar || ''}
                      onChange={(event) =>
                        updateIntegrationField(integration.id, 'environmentVar', event.target.value)
                      }
                    />
                  </Field>

                  <Field>
                    <span>API Key or Secret</span>
                    <SmallInput
                      type="password"
                      value={integration.apiKey || ''}
                      onChange={(event) =>
                        updateIntegrationField(integration.id, 'apiKey', event.target.value)
                      }
                      placeholder="Paste secure key here"
                    />
                  </Field>

                  <Field>
                    <span>Status / Notes</span>
                    <SmallTextarea
                      value={integration.notes || ''}
                      onChange={(event) =>
                        updateIntegrationField(integration.id, 'notes', event.target.value)
                      }
                    />
                  </Field>

                  <PrimaryButton type="button" onClick={() => saveIntegration(integration.id)}>
                    <FiSave /> Save Integration
                  </PrimaryButton>
                </IntegrationCard>
              ))}
            </IntegrationGrid>
          )}

          {activeSection === 'settings' && (
            <PanelCard>
              <CardHeader>
                <h3>Global Site Settings</h3>
                <PrimaryButton type="button" onClick={saveSiteSettings} disabled={settingsSaving}>
                  <FiSave /> {settingsSaving ? 'Saving...' : 'Save Settings'}
                </PrimaryButton>
              </CardHeader>

              <ModeSwitch>
                <ModeButton
                  type="button"
                  $active={settingsEditorMode === 'fields'}
                  onClick={() => setSettingsEditorMode('fields')}
                >
                  Visual Fields
                </ModeButton>
                <ModeButton
                  type="button"
                  $active={settingsEditorMode === 'json'}
                  onClick={() => setSettingsEditorMode('json')}
                >
                  Raw JSON
                </ModeButton>
              </ModeSwitch>

              {settingsEditorMode === 'fields' ? (
                <PageSectionFieldEditor
                  value={siteSettingsValue}
                  onChange={updateSiteSettingsValue}
                  onUploadImage={uploadSiteSettingsImage}
                  uploadingPath={settingsUploadPath}
                  mediaAssets={adminMediaAssets}
                  mediaLoading={adminMediaLoading}
                  onRefreshMedia={() => loadAdminMediaAssets(token)}
                  disabled={settingsSaving}
                />
              ) : (
                <Textarea
                  value={siteSettingsRawValue}
                  onChange={(event) => handleSiteSettingsRawChange(event.target.value)}
                  spellCheck={false}
                  style={{ minHeight: '420px' }}
                />
              )}

              <Notice $type="success">
                Update support contacts, feature toggles, booking policy, and SEO defaults from one place.
              </Notice>
            </PanelCard>
          )}

          {activeSection === 'security' && (
            <SecurityGrid>
              <SecurityCard>
                <h3>Admin Session Controls</h3>
                <ul>
                  <li>Authenticated as: {adminUser?.email || 'admin'}</li>
                  <li>Role enforced by backend middleware: admin</li>
                  <li>Use logout if session token is exposed.</li>
                </ul>
                <GhostButton type="button" onClick={() => handleLogout()}>
                  <FiLogOut /> Logout this session
                </GhostButton>
              </SecurityCard>

              <SecurityCard>
                <h3>Recommended Secure Environment Variables</h3>
                <ul>
                  <li>JWT_SECRET and JWT_EXPIRE</li>
                  <li>ADMIN_EMAIL and ADMIN_PASSWORD_HASH</li>
                  <li>STRIPE_SECRET_KEY for payments</li>
                  <li>TWILIO_AUTH_TOKEN for OTP and alerts</li>
                  <li>AMADEUS_API_KEY and HOTELBEDS_API_KEY for live inventory</li>
                  <li>SENDGRID_API_KEY and GOOGLE_MAPS_API_KEY for ops workflows</li>
                </ul>
                <Notice $type="success">
                  Keep secrets in backend environment only, never in frontend public variables.
                </Notice>
              </SecurityCard>

              <SecurityCard>
                <h3>Operational Checklist</h3>
                <ul>
                  <li><FiCheckCircle /> Review recent activity before publishing changes.</li>
                  <li><FiCheckCircle /> Validate resource JSON before save.</li>
                  <li><FiCheckCircle /> Enable purchased APIs only after testing sandbox keys.</li>
                  <li><FiCheckCircle /> Rotate admin password monthly.</li>
                </ul>
              </SecurityCard>

              <SecurityCard>
                <h3>Platform Recommendations</h3>
                <ul>
                  <li>Add 2FA for admin accounts in production.</li>
                  <li>Move in-memory users to a database (PostgreSQL or MongoDB).</li>
                  <li>Set up daily data backup for all JSON resources.</li>
                  <li>Enable request logging and audit export pipeline.</li>
                </ul>
              </SecurityCard>
            </SecurityGrid>
          )}
        </MainPanel>
      </AdminLayout>
    </Shell>
  );
}
