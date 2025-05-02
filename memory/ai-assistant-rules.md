# AI Assistant Rules for Alchemy Project

## Primary Rule

**IMPORTANT**: Before working on any task related to the Alchemy project, AI assistants MUST read the contents of the `memory` folder, particularly `architect.md` and `memory.md`.

## Process for AI Assistants

1. **Read First**: When a new conversation starts about the Alchemy project, read the memory folder documents before providing assistance.

2. **Understand Context**: Use the information in these documents to understand:
   - Project architecture and structure
   - Previous decisions and their rationale
   - Established patterns and conventions
   - Key requirements and constraints

3. **Maintain Consistency**: Ensure that any code, suggestions, or changes you propose are consistent with the established architecture and patterns.

4. **Update Documentation**: After implementing significant changes or features, update the relevant memory documents to reflect these changes.

5. **Reference Documentation**: When explaining decisions or making recommendations, reference the relevant sections of the memory documents.

## Specific Guidelines

### When Modifying Code

- Follow the component structure outlined in `architect.md`
- Use the established naming conventions
- Maintain the internationalization approach
- Follow the styling guidelines using TailwindCSS

### When Adding Features

- Check if similar features exist and follow their patterns
- Ensure new features support both English and Chinese languages
- Update the memory documents with information about the new feature

### When Fixing Issues

- Understand the context from the memory documents
- Document significant fixes in `memory.md`
- Ensure fixes maintain compatibility with existing code

## Updating Memory Documents

When updating memory documents:

1. Add new information in the appropriate section
2. Include the date of the change when possible
3. Be concise but thorough
4. Maintain the existing format and structure
5. Ensure the information is accurate and useful for future reference

## Reminder

The memory folder is a critical resource for maintaining project consistency and knowledge preservation. Neglecting to read and update these documents can lead to inconsistent code, repeated mistakes, and loss of important context.

**Always prioritize reading and understanding the memory documents before working on the Alchemy project.**
