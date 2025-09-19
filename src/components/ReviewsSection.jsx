import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    rating: 5,
    date: "Aug 12, 2025",
    text: "Amazing platform! I’ve been using it daily and it’s very reliable.",
    name: "Alice Johnson",
    uid: "2039",
    country: "United States",
  },
  {
    id: 2,
    rating: 4,
    date: "Jul 30, 2025",
    text: "Great experience overall, but I’d love to see more payment options.",
    name: "Mohammed Ali",
    uid: "5841",
    country: "UAE",
  },
  {
    id: 3,
    rating: 5,
    date: "Jun 18, 2025",
    text: "Best service I’ve ever used. Super fast and trustworthy.",
    name: "Sophia Lee",
    uid: "7124",
    country: "South Korea",
  },
  {
    id: 4,
    rating: 4,
    date: "May 5, 2025",
    text: "Solid platform with excellent support team.",
    name: "Carlos Martinez",
    uid: "9982",
    country: "Mexico",
  },
  {
    id: 5,
    rating: 5,
    date: "Apr 25, 2025",
    text: "Highly recommended. I earn daily with no hassle.",
    name: "Emma Brown",
    uid: "4517",
    country: "UK",
  },
  {
    id: 6,
    rating: 5,
    date: "Mar 10, 2025",
    text: "Fantastic! Works perfectly on all my devices.",
    name: "Rajesh Kumar",
    uid: "6273",
    country: "India",
  },
];

const ReviewsSection = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What people say about us</h2>
        <p className="text-gray-600">
          More than 10 million customers worldwide trust us and earn daily.
        </p>
      </div>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
            {/* Rating + Date */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>

            {/* Review text */}
            <p className="text-gray-700 mb-4">{review.text}</p>

            {/* Reviewer */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-semibold">
                {review.country.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="font-semibold text-sm">{review.name}</div>
                <div className="text-xs text-gray-500">UID {review.uid}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit button */}
      <div className="text-center mt-8">
        <button className="bg-blue-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-200 transition-colors">
          Submit a review
        </button>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
