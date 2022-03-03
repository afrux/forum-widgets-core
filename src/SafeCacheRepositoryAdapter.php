<?php

namespace Afrux\ForumWidgets;

use Closure;
use Illuminate\Contracts\Cache\Repository;
use Monolog\Logger;
use Psr\Log\LoggerInterface;
use function Afrux\ForumWidgets\Helper\afrux_cache_is_writable;

class SafeCacheRepositoryAdapter
{
    /**
     * @var Repository
     */
    protected $cache;

    /**
     * @var LoggerInterface
     */
    protected $logger;

    public function __construct(Repository $cache, LoggerInterface $logger)
    {
        $this->cache = $cache;
        $this->logger = $logger;
    }

    public function remember($key, $ttl, Closure $callback)
    {
        if (! afrux_cache_is_writable()) {
            $this->logger->log(Logger::WARNING, 'Cannot use file cache because storage/cache is not writable, this will affect the software.');

            return null;
        }

        return $this->cache->remember($key, $ttl, $callback);
    }
}
