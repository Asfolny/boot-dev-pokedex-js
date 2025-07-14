export type CacheEntry<T> = {
  createdAt: number;
  val: T;
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapInterval: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, value: T): void {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val: value,
    };
    this.#cache.set(key, entry);
  }

  get<T>(name: string): T | undefined {
    const entry = this.#cache.get(name);
    if (entry !== undefined) {
      return entry.val as T;
    }
    return undefined;
  }

  #reap() {
    const now = Date.now()
    for (const [key, entry] of this.#cache) {
      if (now - entry.createdAt >= this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    this.#reapInterval = setInterval(() => {
      this.#reap()
    }, this.#interval);
  }

  stopReapLoop() {
    if (this.#reapInterval) {
      clearTimeout(this.#reapInterval);
      this.#reapInterval = undefined;
    }
  }
}
