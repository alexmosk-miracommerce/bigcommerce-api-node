import { AxiosInstance } from 'axios';
import ThemeActions from './ThemeActions';
import ThemeConfigurations from './ThemeConfigurations';
import ThemeCustomTemplates from './ThemeCustomTemplates';
import ThemeJobs from './ThemeJob';
import Themes from './Themes';
declare class ThemesV3 {
    themes: Themes;
    themeActions: ThemeActions;
    themeConfigurations: ThemeConfigurations;
    themeCustomTemplates: ThemeCustomTemplates;
    themeJobs: ThemeJobs;
    constructor(client: AxiosInstance);
}
export default ThemesV3;
