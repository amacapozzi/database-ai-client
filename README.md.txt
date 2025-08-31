# Database AI Client 🗄️🤖

A modern, AI-powered database client built with Go and Wails. Explore your databases with intelligent insights and natural language queries.

![Go Version](https://img.shields.io/badge/Go-1.25+-00ADD8?style=flat&logo=go)
![Wails](https://img.shields.io/badge/Wails-v2.10+-FF6B6B?style=flat&logo=wails)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Platform](https://img.shields.io/badge/Platform-Windows%20|%20macOS%20|%20Linux-lightgrey)

## ✨ Features

- 🔗 **Multi-Database Support** - Connect to MySQL, PostgreSQL, SQLite, SQL Server
- 🤖 **AI-Powered Analysis** - Get intelligent insights about your data
- 📊 **Interactive Table Viewer** - Browse and explore your database tables
- 💬 **Natural Language Queries** - Ask questions about your data in plain English
- 🎨 **Modern UI** - Beautiful, responsive interface built with React and Tailwind CSS
- 🚀 **Native Performance** - Desktop application with native speed and feel
- 🔒 **Secure** - All connections and data stay local on your machine

## 🚀 Quick Start

### Prerequisites

- [Go 1.25+](https://golang.org/dl/)
- [Node.js 24.7.0+](https://nodejs.org/)
- [Wails CLI](https://wails.io/docs/gettingstarted/installation)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/database-ai-client.git
cd database-ai-client

# Install Wails CLI (if not already installed)
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Install dependencies and run in development mode
wails dev
```

### Building for Production

```bash
# Build for your current platform
wails build

# Build for specific platforms
wails build -platform windows/amd64
wails build -platform darwin/amd64
wails build -platform linux/amd64
```

## 🏗️ Project Structure

```
database-ai-client/
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/             # Application pages
│   │   ├── services/          # API services
│   │   └── utils/             # Utility functions
│   ├── public/
│   │   └── fonts/             # Custom fonts (Geist)
│   └── package.json
├── internal/                   # Go backend (private)
│   ├── database/              # Database connection & queries
│   ├── ai/                    # AI service integration
│   ├── models/                # Data models
│   └── config/                # Configuration
├── app.go                     # Wails app context
├── main.go                    # Application entry point
├── wails.json                 # Wails configuration
└── go.mod
```

## 🔧 Configuration

### Database Connections

Currently supports:
- **PostgreSQL**: `postgres://user:password@host:port/database`
- **MySQL**: `mysql://user:password@host:port/database`
- **SQLite**: `sqlite:///path/to/database.db`
- **SQL Server**: `sqlserver://user:password@host:port?database=dbname`

### AI Configuration

Configure your AI provider in the settings:

```json
{
  "ai_provider": "openai",
  "api_key": "your-api-key-here",
  "model": "gpt-4"
}
```

Supported AI providers:
- OpenAI (GPT-3.5, GPT-4)
- Anthropic Claude
- Local models (Ollama)

## 🎯 Usage Examples

### Connecting to a Database

1. Click "New Connection"
2. Enter your database credentials
3. Test the connection
4. Start exploring your data!

### AI-Powered Queries

```
🤖 "Show me all users who registered in the last 30 days"
🤖 "What's the average order value by month?"
🤖 "Find duplicate records in the customers table"
```

### Data Exploration

- Browse tables and their schemas
- View data with pagination
- Filter and search records
- Export results to CSV/JSON

## 🛠️ Development

### Running in Development Mode

```bash
# Start the development server with hot reload
wails dev

# Run with specific flags
wails dev -devserver "http://localhost:5173" -frontenddevserverurl "http://localhost:5173"
```

### Adding New Database Drivers

1. Add the driver import in `internal/database/connection.go`
2. Implement the connection logic
3. Add configuration options
4. Test with sample databases

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📦 Dependencies

### Backend (Go)
- [Wails v2](https://github.com/wailsapp/wails) - Desktop app framework
- [database/sql](https://pkg.go.dev/database/sql) - Database interface
- Driver packages for each database type

### Frontend (React)
- [React 18](https://reactjs.org/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

## 🚦 Roadmap

- [ ] **v1.1** - Query builder interface
- [ ] **v1.2** - Data visualization charts
- [ ] **v1.3** - Database schema migration tools
- [ ] **v1.4** - Team collaboration features
- [ ] **v1.5** - Plugin system for custom AI models

## 🐛 Known Issues

- Large result sets (>10k rows) may cause performance issues
- AI responses depend on the configured model's capabilities
- Some database-specific features may not be fully supported

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 💬 Support

- 🐛 [Report bugs](https://github.com/amacapozzi/database-ai-client/issues)
- 💡 [Request features](https://github.com/amacapozzi/database-ai-client/issues)
- 📧 [Email support](mailto:amacapozzi07@gmail.com)

## 🙏 Acknowledgments

- [Wails](https://wails.io/) for the amazing Go + Web framework
- [Geist Font](https://vercel.com/font) for the beautiful typography
- The open-source community for inspiration and tools

---

⭐ **Star this repository if you find it helpful!**

Made with ❤️ and Go