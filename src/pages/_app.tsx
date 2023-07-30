import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "~/components/Layout";

const queryClient = new QueryClient();
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default MyApp;
