import { PageShell } from './PageShell';
import { PageTitle, BodyText } from '../components/layout/primitives';
import { Loader } from '../components/ui/Loader';

export function LoadingPage() {
  return (
    <PageShell>
      <div className="page-shell__content">
        <PageTitle>Loading...</PageTitle>
        <BodyText>Please wait while the next section is prepared.</BodyText>
        <Loader />
      </div>
    </PageShell>
  );
}
