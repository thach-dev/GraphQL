const { ApolloServer, gql } = require('apollo-server');
const supabase = require('./db');  

const typeDefs = gql`
  type Query {
    getVideos: [Video]
  }

  type Video {
    id: Int
    title_video: String
    img_video: String
    url_video: String
  }
`;

// Định nghĩa resolvers
const resolvers = {
  Query: {
    getVideos: async () => {
      // Truy vấn bảng list_video từ Supabase
      const { data, error } = await supabase.from('list_video').select('*');
      
      if (error) {
        console.error('Error fetching data:', error);
        throw new Error('Error fetching data');
      }
      
      return data;  
    }
  }
};

// Tạo Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Chạy server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
