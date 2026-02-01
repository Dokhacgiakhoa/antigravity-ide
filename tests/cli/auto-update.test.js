const { checkAndApplyUpdates } = require('../../cli/lib/auto-update');

// Mocks
const mockUpdateNotifier = jest.fn();
const mockPrompts = jest.fn();
const mockExecSync = jest.fn();
const mockExit = jest.fn();

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

describe('checkAndApplyUpdates', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should do nothing if no update is available', async () => {
    // Setup updateNotifier to return no update
    mockUpdateNotifier.mockReturnValue({ update: null });

    await checkAndApplyUpdates({}, {
      updateNotifier: mockUpdateNotifier,
      prompts: mockPrompts,
      execSync: mockExecSync,
      exit: mockExit
    });

    expect(mockUpdateNotifier).toHaveBeenCalled();
    expect(mockPrompts).not.toHaveBeenCalled();
    expect(mockExecSync).not.toHaveBeenCalled();
  });

  test('should prompt and install if update is available and user accepts', async () => {
    // Setup updateNotifier to return an update
    mockUpdateNotifier.mockReturnValue({
      update: { latest: '3.6.0', current: '3.5.0', type: 'minor' }
    });

    // User accepts update
    mockPrompts.mockResolvedValue({ shouldUpdate: true });

    await checkAndApplyUpdates({}, {
      updateNotifier: mockUpdateNotifier,
      prompts: mockPrompts,
      execSync: mockExecSync,
      exit: mockExit
    });

    expect(mockPrompts).toHaveBeenCalled();
    expect(mockExecSync).toHaveBeenCalledWith('npm install -g antigravity-ide@latest', expect.anything());
    expect(mockExit).toHaveBeenCalledWith(0);
  });

  test('should prompt and do nothing if user declines', async () => {
    // Setup updateNotifier to return an update
    mockUpdateNotifier.mockReturnValue({
      update: { latest: '3.6.0', current: '3.5.0', type: 'minor' }
    });

    // User declines update
    mockPrompts.mockResolvedValue({ shouldUpdate: false });

    await checkAndApplyUpdates({}, {
      updateNotifier: mockUpdateNotifier,
      prompts: mockPrompts,
      execSync: mockExecSync,
      exit: mockExit
    });

    expect(mockPrompts).toHaveBeenCalled();
    expect(mockExecSync).not.toHaveBeenCalled();
    expect(mockExit).not.toHaveBeenCalled();
  });
});
