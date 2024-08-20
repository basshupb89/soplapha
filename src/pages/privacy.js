import { AboutDetailBlock } from 'components/About/AboutDetailBlock/AboutDetailBlock';
import { PublicLayout } from 'layout/PublicLayout';
import { PrivacyDetails } from 'components/PublicLinks/PrivacyDetails';
const breadcrumbsData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Privacy',
      path: '/privacy',
    },
  ];

  const PrivacyPage = () => {
    return (
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Privacy'>
        <AboutDetailBlock />
        <PrivacyDetails />
      </PublicLayout>
    );
  };
  
  export default PrivacyPage;