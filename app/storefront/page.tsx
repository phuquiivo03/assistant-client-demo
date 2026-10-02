import StorefrontHeader from "../components/StorefrontHeader";
import ProductView from "../components/ProductView";
import RatingFeedback from "../components/RatingFeedback";
import ChatWidget from "../components/ChatWidget";

export default function StorefrontPage() {
  return (
    <div className="min-h-screen bg-[#E0E5EC]">
      <StorefrontHeader />
      <main>
        <ProductView />
        <RatingFeedback />
      </main>
      <ChatWidget />
    </div>
  );
}
