import { AboutDetailBlock } from 'components/About/AboutDetailBlock/AboutDetailBlock';
import { PublicLayout } from 'layout/PublicLayout';
import {Terms_conditions} from 'components/PublicLinks/Terms_conditions'
const breadcrumbsData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Terms & Conditions',
      path: '/terms',
    },
  ];

  const PrivacyPage = () => {
    return (
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Terms & Conditions'>
        <AboutDetailBlock />
        <Terms_conditions />
      </PublicLayout>
    );
  };
  
  export default PrivacyPage;